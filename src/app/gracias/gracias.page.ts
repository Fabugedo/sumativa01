import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

declare var google: any;

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.page.html',
  styleUrls: ['./gracias.page.scss'],
  standalone: false,
})
export class GraciasPage implements OnInit, AfterViewInit {
  numeroSeguimiento: string;
  coords = { lat: 0, lng: 0 };

  constructor(private db: DatabaseService) {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear().toString().slice(2);
    const random = Math.floor(Math.random() * 9000) + 1000;
    this.numeroSeguimiento = `BHM-${dia}${mes}${anio}-${random}`;
  }

  async ngOnInit() {
    const reservas = await this.db.getReservas();
    const ultima = reservas[reservas.length - 1];
    if (ultima?.coords) {
      try {
        const parsed = JSON.parse(ultima.coords);
        this.coords = {
          lat: parsed.lat,
          lng: parsed.lng
        };
      } catch (e) {
        console.warn('No se pudo parsear coords:', e);
      }
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const mapEle = document.getElementById('map') as HTMLElement;
      if (mapEle && typeof google !== 'undefined') {
        const map = new google.maps.Map(mapEle, {
          center: this.coords,
          zoom: 15
        });
        new google.maps.Marker({
          position: this.coords,
          map: map,
          title: 'Ubicación de entrega'
        });
      }
    }, 400);
  }
}
