import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { DatosService } from '../services/datos.service';
import { ApiService } from '../services/api/api.service';
import { tomarFoto } from '../services/cam/cam.service';
import { LoadingController, NavController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';
declare var google: any;


@Component({
  selector: 'app-confirmar-arriendo',
  templateUrl: './confirmar-arriendo.page.html',
  styleUrls: ['./confirmar-arriendo.page.scss'],
  standalone: false,
})
export class ConfirmarArriendoPage {
  datos: any;
  coords = { lat: 0, lng: 0 };
  map: any = null;
  marker: any = null;
  photoBase64: string | null = null;
  isLoading = false;

  constructor(
    private datosService: DatosService,
    private api: ApiService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private databaseService: DatabaseService
  ) {
    this.datos = this.datosService.getDatos();
  }

  async loadLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      const mapEle = document.getElementById('map') as HTMLElement;
      this.map = new google.maps.Map(mapEle, {
        center: this.coords,
        zoom: 15
      });
      this.marker = new google.maps.Marker({
        position: this.coords,
        map: this.map,
        title: 'Tu ubicación'
      });
    } catch (e) {
      console.error('Error al obtener ubicación o cargar el mapa:', e);
    }
  }

  async takePhoto() {
    try {
      this.photoBase64 = await tomarFoto();
    } catch (e) {
      console.error('Error al tomar foto:', e);
    }
  }

  async confirmarPago() {
    this.isLoading = true;

    const loading = await this.loadingCtrl.create({
      message: 'Procesando arriendo...',
      spinner: 'crescent',
      translucent: true,
      cssClass: 'bohemia-loading'
    });
    await loading.present();

    try {
      const order = {
        ...this.datos,
        coords: this.coords,
        photo: this.photoBase64,
        total: this.datos.total
      };

      // 1. Guardar en SQLite local (obligatorio por la rúbrica)
      await this.databaseService.addReserva(order);
      console.log('Reserva guardada localmente');

      // 2. Intentar enviar a API REST (si hay conexión)
      try {
        await this.api.createOrder(order);
        console.log('Reserva enviada al servidor');
      } catch (error) {
        console.warn('No se pudo enviar a la API. Guardado solo local:', error);
      }

      // 3. Limpiar y redirigir
      this.datosService.setDatos({});
      await loading.dismiss();
      await this.navCtrl.navigateRoot('/gracias');
    } catch (error) {
      console.error('Error durante el proceso de pago:', error);
      await loading.dismiss();
    } finally {
      this.isLoading = false;
    }
  }
}
