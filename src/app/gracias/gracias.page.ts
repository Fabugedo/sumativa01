import { Component } from '@angular/core';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.page.html',
  styleUrls: ['./gracias.page.scss'],
  standalone: false,
})
export class GraciasPage {
  numeroSeguimiento: string;

  constructor() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear().toString().slice(2);
    const random = Math.floor(Math.random() * 9000) + 1000;
    this.numeroSeguimiento = `BHM-${dia}${mes}${anio}-${random}`;
  }
}

