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
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {
    this.datosForm = this.fb.group({
      nombreNovia:     ['', [Validators.required, Validators.minLength(3)]],
      email:           ['', [Validators.required, Validators.email]], // <--- Editable y simple
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

    const vals = this.datosForm.value; // <-- value (no getRawValue), porque nada está deshabilitado
    const precioTocado = vals.tocado.valor;
    const precioAros   = vals.usarAros ? this.obtenerPrecioAros(vals.estiloAros) : 0;
    const total        = precioTocado + precioAros;

    const reserva = {
      nombreNovia: vals.nombreNovia,
      email: vals.email,
      fechaBoda: vals.fechaMatrimonio,
      tipoTocado: vals.tocado ? vals.tocado.nombre : '',
      coords: '',
      foto: '',
      total
    };

    try {
      await this.databaseService.addReserva(reserva);
      this.datosForm.reset();
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
