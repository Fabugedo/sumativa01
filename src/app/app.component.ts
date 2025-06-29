// src/app/app.component.ts
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
  public showBanner = true; //control del banner

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
    await StatusBar.setOverlaysWebView({ overlay: false });
    await StatusBar.setBackgroundColor({ color: '#bba088' });
    await StatusBar.setStyle({ style: Style.Light });

    try {
      await this.databaseService.initializeDB();
      console.log('Base de datos SQLite inicializada correctamente');
    } catch (err) {
      console.error('Error inicializando SQLite:', err);
    }
  }
}
