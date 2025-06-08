import { Component } from '@angular/core';
import { DatosService } from '../services/datos.service';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-arriendo',
  templateUrl: './confirmar-arriendo.page.html',
  styleUrls: ['./confirmar-arriendo.page.scss'],
  standalone: false,
})
export class ConfirmarArriendoPage {
  datos: any;

  constructor(
    private datosService: DatosService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {
    this.datos = this.datosService.getDatos();
  }

  async confirmarPago() {
    const loading = await this.loadingCtrl.create({
      message: 'Procesando arriendo...',
      spinner: 'crescent', //recordar la animació
      duration: 2000,      // el delay
      translucent: true,
      cssClass: 'bohemia-loading'
    });

    await loading.present();

    setTimeout(() => {
      this.navCtrl.navigateForward('/gracias');
    }, 2000);
  }

  volverAtras() {
    this.navCtrl.navigateBack('/datos');
  }
}
