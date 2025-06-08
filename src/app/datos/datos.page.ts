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
  estiloTocado: string = '';
  estiloAros: string = '';

  constructor(private navCtrl: NavController) {}

  guardarDatos() {
    console.log('👰 Nombre de la novia:', this.nombreNovia);
    console.log('📅 Fecha del matrimonio:', this.fechaMatrimonio);
    console.log('💎 ¿Usará aros?:', this.usarAros);
    if (this.usarAros) {
      console.log('🌸 Estilo de aros:', this.estiloAros);
    }
    console.log('👑 Estilo de tocado:', this.estiloTocado);
    console.log('✅ Datos registrados correctamente (simulados)');

    this.navCtrl.navigateForward('/catalogo');
  }

  volverLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
