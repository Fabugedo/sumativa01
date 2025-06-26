// src/app/app.component.ts
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  // Controla si mostramos el banner global
  public showBanner = true;

  constructor(
    private platform: Platform,
    private router: Router
  ) {
    // Espera a que la plataforma esté lista
    this.platform.ready()
      .then(() => this.initializeApp())
      .catch(err => console.error('Error inicializando la app:', err));

    // Cada vez que cambie la ruta, ocultamos el banner en /login
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.showBanner = e.urlAfterRedirects !== '/login';
      });
  }

  private async initializeApp(): Promise<void> {
    // StatusBar bajo el webview y color sólido
    await StatusBar.setOverlaysWebView({ overlay: false });
    // Puedes usar tu variable de color también:
    await StatusBar.setBackgroundColor({ color: '#bba088' });
    // Estilo claro (íconos oscuros), pruébalo a Light o Dark
    await StatusBar.setStyle({ style: Style.Light });
  }
}
