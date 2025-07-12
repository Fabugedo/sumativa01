import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
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
export class ConfirmarArriendoPage implements OnInit {
  datos: any;
  coords = { lat: 0, lng: 0 };
  map: any = null;
  marker: any = null;
  photoBase64: string | null = null;
  isLoading = false;
  errorUbicacion = '';

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private databaseService: DatabaseService,
    private cdr: ChangeDetectorRef    // <-- NUEVO
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const reservas = await this.databaseService.getReservas();
      this.datos = reservas.find(r => r.id == id);
    }
  }

  async loadLocation() {
    this.errorUbicacion = '';
    try {
      const position = await Geolocation.getCurrentPosition({ timeout: 20000 });
      this.coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };


      await Promise.resolve();
      this.cdr.detectChanges();

      const mapEle = document.getElementById('map') as HTMLElement;
      if (!mapEle) {
        this.errorUbicacion = 'No se encontró el contenedor del mapa.';
        return;
      }
      if (typeof google === 'undefined') {
        this.errorUbicacion = 'Google Maps no está cargado todavía. Espera unos segundos e intenta de nuevo.';
        return;
      }
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
      this.errorUbicacion = 'No se pudo obtener la ubicación. Asegúrate de haber dado permisos de ubicación en el emulador o intenta nuevamente.';
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
      try {
        await this.api.createOrder(order);
        if (order.id) {
          await this.databaseService.marcarComoEnviado(order.id);
        }
      } catch (error) {
        // Guardado solo local, ya está en base
      }
      await loading.dismiss();
      await this.navCtrl.navigateRoot('/gracias');
    } catch (error) {
      console.error('Error durante el proceso de pago:', error);
      await loading.dismiss();
    } finally {
      this.isLoading = false;
    }
  }

  async volverAtras() {
    await this.navCtrl.navigateBack('/mis-reservas');
  }
}
