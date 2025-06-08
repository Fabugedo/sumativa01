import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private datos: any = {};

  setDatos(info: any) {
    this.datos = info;
  }

  getDatos() {
    return this.datos;
  }
}
