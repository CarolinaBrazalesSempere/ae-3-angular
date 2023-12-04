import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name: string;
  city: string;
  email: string;
  phone: number;
  img: string;

  constructor() {
    this.name = 'Carol';
    this.city = 'València';
    this.email = 'carol@gmail.com';
    this.phone = 666777888;
    this.img = 'assets/img/captain-marvel.avif';
  }
}
