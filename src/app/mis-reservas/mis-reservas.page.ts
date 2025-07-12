import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.page.html',
  styleUrls: ['./mis-reservas.page.scss'],
  standalone: false,
})
export class MisReservasPage {
  reservas: any[] = [];
  cargando = true;
  emailActual: string = '';


  constructor(
    private databaseService: DatabaseService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private router: Router
  ) {}
  volverLogin() {
    this.navCtrl.navigateBack('/login');
  }



  async ionViewWillEnter() {
    if (!this.emailActual) {
      await this.solicitarEmail();
    }
    await this.cargarReservas();
  }


  async solicitarEmail() {
    const alert = await this.alertCtrl.create({
      header: 'Ingresa tu correo',
      inputs: [{ name: 'email', type: 'email', placeholder: 'tu@email.com' }],
      buttons: [{
        text: 'Aceptar',
        handler: (data) => { this.emailActual = data.email?.trim().toLowerCase(); }
      }],
      backdropDismiss: false
    });
    await alert.present();
    await alert.onDidDismiss();
  }


  async cargarReservas() {
    this.cargando = true;
    const todas = await this.databaseService.getReservas();
    this.reservas = todas.filter(r =>
      r.email?.trim().toLowerCase() === this.emailActual
    );
    this.cargando = false;
  }



  async eliminarReserva(id: number) {
    const alerta = await this.alertCtrl.create({
      header: '¿Eliminar reserva?',
      message: 'Esta acción no se puede deshacer.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.databaseService.deleteReserva(id);
            await this.cargarReservas();
          },
        },
      ],
    });
    await alerta.present();
  }
  async editarReserva(reserva: any) {
    const alert = await this.alertCtrl.create({
      header: 'Editar Nombre',
      inputs: [
        {
          name: 'nombreNovia',
          type: 'text',
          placeholder: 'Nombre de la novia',
          value: reserva.nombreNovia
        }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: async (data) => {
            reserva.nombreNovia = data.nombreNovia;
            await this.databaseService.updateReservaNombre(reserva);
            await this.cargarReservas();
          }
        }
      ]
    });
    await alert.present();
  }



  irAConfirmarArriendo() {
    if (this.reservas.length > 0) {
      this.navCtrl.navigateForward(`/confirmar-arriendo/${this.reservas[0].id}`);
    }
  }



}
