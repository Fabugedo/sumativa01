import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
  standalone: false,
})
export class DatosPage {
  nombreNovia: string = '';
  fechaMatrimonio: string = '';
  usarAros: boolean = false;

  tocadoSeleccionado: any = null;
  estiloAros: string = '';

  precioAros: number = 0;
  total: number = 0;

  constructor(private navCtrl: NavController) {}

  // Tocados con precio y nombre como en catálogo
  tocadosDisponibles = [
    { nombre: 'Tocado Floral', estilo: 'Romántico', valor: 35000 },
    { nombre: 'Tocado de Perlas', estilo: 'Clásico', valor: 42000 },
    { nombre: 'Tocado Dorado', estilo: 'Elegante', valor: 39000 }
  ];

  verCatalogo() {
    this.navCtrl.navigateForward('/catalogo');
  }

  guardarDatos() {
    const precioTocado = this.tocadoSeleccionado?.valor || 0;
    const nombreTocado = this.tocadoSeleccionado?.nombre || '';

    this.precioAros = this.usarAros ? this.obtenerPrecioAros(this.estiloAros) : 0;
    this.total = precioTocado + this.precioAros;

    console.log('👰 Nombre de la novia:', this.nombreNovia);
    console.log('📅 Fecha del matrimonio:', this.fechaMatrimonio);
    console.log('👑 Tocado:', nombreTocado, `($${precioTocado})`);
    if (this.usarAros) {
      console.log('💎 Estilo de aros:', this.estiloAros, `($${this.precioAros})`);
    }
    console.log('💰 Total estimado:', this.total);

    this.navCtrl.navigateForward('/confirmar-arriendo');
  }

  volverLogin() {
    this.navCtrl.navigateBack('/login');
  }

  obtenerPrecioAros(estilo: string): number {
    switch (estilo) {
      case 'perlas': return 18000;
      case 'hojas': return 15000;
      case 'cristal': return 16000;
      case 'florales': return 16000;
      default: return 0;
    }
  }
}
