import { Component } from '@angular/core';

export class Contacto {
  email: string = '';

  constructor() {
    this.email = 'grupazo@grupazo.com';
  }
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  contacto: Contacto = new Contacto();
}
