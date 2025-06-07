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
    if (!this.usuario || !this.contrasena) {
      alert('Por favor completa ambos campos');
      return;
    }

    if (this.usuario.length < 3 || this.usuario.length > 8) {
      alert('El usuario debe tener entre 3 y 8 caracteres');
      return;
    }

    const regexSoloNumeros = /^\d{4}$/;
    if (!regexSoloNumeros.test(this.contrasena)) {
      alert('La contraseña debe tener exactamente 4 dígitos numéricos');
      return;
    }

    console.log('usuario ->', this.usuario);
    console.log('contraseña ->', this.contrasena);

    this.router.navigate(['/galeria']);
  }
}
