import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: false,
})
export class CatalogoPage {
  productos = [
    { nombre: 'Tocado Floral', estilo: 'Romántico', precio: 35000, imagen: 'assets/images/tocado_floral.jpg' },
    { nombre: 'Tocado de Perlas', estilo: 'Clásico', precio: 42000, imagen: 'assets/images/tocado_perlas.jpg' },
    { nombre: 'Tocado Dorado', estilo: 'Elegante', precio: 39000, imagen: 'assets/images/tocado_dorado.jpg' },
    { nombre: 'Aros de Cristal', estilo: 'Cristal', precio: 18000, imagen: 'assets/images/aros_cristal.jpg' },
    { nombre: 'Aros Florales', estilo: 'Florales', precio: 16000, imagen: 'assets/images/aros_florales.jpg' }
  ];

  constructor(private navCtrl: NavController) {}

  volverDatos() {
    this.navCtrl.navigateBack('/datos');
  }
}
