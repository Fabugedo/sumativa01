import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    // Con el form invalid deshabilitado, ya sabes que usuario y pass cumplen pattern
    console.log('usuario ->', this.usuario);
    console.log('contraseña ->', this.contrasena);
    this.router.navigate(['/datos']);
  }

}
