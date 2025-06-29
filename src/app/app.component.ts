import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StatusBar, Style } from '@capacitor/status-bar';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public showBanner = true;

  constructor(
    private platform: Platform,
    private router: Router,
    private databaseService: DatabaseService
  ) {
    this.platform.ready()
      .then(() => this.initializeApp())
      .catch(err => console.error('Error inicializando la app:', err));

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.showBanner = e.urlAfterRedirects !== '/login';
      });
  }

  private async initializeApp(): Promise<void> {
    // --- STATUS BAR CONFIGURACIÓN UNIVERSAL ---
    try {
      await StatusBar.setOverlaysWebView({ overlay: false }); // El contenido SIEMPRE inicia bajo el área del sistema
      await StatusBar.setBackgroundColor({ color: '#bba088' }); // Color café, tu branding
      await StatusBar.setStyle({ style: Style.Light }); // Texto de la status bar en color claro (si el fondo es oscuro)
    } catch (err) {
      console.warn('StatusBar plugin no disponible o error al configurar:', err);
    }

    // --- INICIALIZAR BASE DE DATOS LOCAL ---
    try {
      await this.databaseService.initializeDB();
      console.log('Base de datos SQLite inicializada correctamente');
    } catch (err) {
      console.error('Error inicializando SQLite:', err);
    }
  }
}
