import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string;
  password: string;
  errorInfo = false;
  errorName = false;
  errorLogin = false;

  constructor(private router: Router) {
    this.userName = '';
    this.password = '';
  }

  users = [
    { nombre: 'Carol', password: '1234' },
    { nombre: 'Saioa', password: '2345' },
    { nombre: 'Joan', password: '12345' },
  ];

  public validateForm() {
    let errorForm = false; //variable de control de error

    if (this.userName.trim().length == 0) {
      this.errorName = true;
      errorForm = true; //si entra aquí porque hay errores será true y se mostrará el mensaje de error
    }

    if (this.password.trim().length < 3) {
      this.errorInfo = true;
      errorForm = true;
    }

    return errorForm;
  }

  public login() {
    if (!this.validateForm()) {
      // Si no hay errores en el formulario
      let userFound = false; // Variable para controlar si se encuentra el usuario

      for (let user of this.users) {
        if (
          this.userName.trim() === user.nombre &&
          this.password.trim() === user.password
        ) {
          userFound = true;
          this.router.navigateByUrl(`/videogames?userName=${this.userName}`);
          break; // Salimos del bucle una vez encontrada la coincidencia
        }
      }

      if (!userFound) {
        this.router.navigate(['/login']);
        this.errorLogin = true;
      }
    }
  }
}
