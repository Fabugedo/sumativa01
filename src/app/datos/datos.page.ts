import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
  standalone: false,
})
export class DatosPage implements OnInit {
  datosForm!: FormGroup;
  tocadosDisponibles = [
    { nombre: 'Tocado Floral', estilo: 'Romántico', valor: 35000 },
    { nombre: 'Tocado de Perlas', estilo: 'Clásico',  valor: 42000 },
    { nombre: 'Tocado Dorado', estilo: 'Elegante',    valor: 39000 },
  ];

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private databaseService: DatabaseService // <-- INYECTA TU SERVICE DE CRUD
  ) {}

  ngOnInit() {
    this.datosForm = this.fb.group({
      nombreNovia:     ['', [Validators.required, Validators.minLength(3)]],
      fechaMatrimonio: [null, [Validators.required, this.fechaNoPasada]],
      tocado:          [null, Validators.required],
      usarAros:        [false],
      estiloAros:      [{ value: null, disabled: true }, []]
    });

    this.datosForm.get('usarAros')!.valueChanges.subscribe(usando => {
      const ctrl = this.datosForm.get('estiloAros')!;
      if (usando) {
        ctrl.enable();
        ctrl.setValidators(Validators.required);
      } else {
        ctrl.disable();
        ctrl.clearValidators();
      }
      ctrl.updateValueAndValidity();
    });
  }

  fechaNoPasada(control: AbstractControl) {
    const f = control.value as Date;
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return f && f < hoy ? { pasada: true } : null;
  }

  async guardarDatos() {
    if (this.datosForm.invalid) {
      this.datosForm.markAllAsTouched();
      return;
    }

    const vals = this.datosForm.value;
    const precioTocado = vals.tocado.valor;
    const precioAros   = vals.usarAros ? this.obtenerPrecioAros(vals.estiloAros) : 0;
    const total        = precioTocado + precioAros;

    // --- ARMAR OBJETO RESERVA CON LOS NOMBRES QUE ESPERA LA BD ---
    const reserva = {
      nombreNovia: vals.nombreNovia,
      fechaBoda: vals.fechaMatrimonio, // Debe coincidir con el campo de tu tabla
      tipoTocado: vals.tocado ? vals.tocado.nombre : '',
      coords: '', // Puedes integrar después
      foto: '',   // Puedes integrar después
      total
    };

    try {
      await this.databaseService.addReserva(reserva);
      this.datosForm.reset(); // Limpia el formulario si quieres permitir múltiples reservas
      this.navCtrl.navigateForward('/mis-reservas');
    } catch (error) {
      console.error('Error guardando reserva:', error);
      // Aquí podrías mostrar un toast con el error si lo deseas
    }
  }

  verCatalogo(): void {
    this.navCtrl.navigateForward('/catalogo');
  }

  volverLogin(): void {
    this.navCtrl.navigateBack('/login');
  }

  private obtenerPrecioAros(estilo: string): number {
    switch (estilo) {
      case 'perlas':   return 18000;
      case 'hojas':    return 15000;
      case 'cristal':  return 16000;
      case 'florales': return 16000;
      default:         return 0;
    }
  }
}
