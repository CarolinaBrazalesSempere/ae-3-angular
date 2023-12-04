import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css'],
})
export class VideogameComponent {
  id: number;
  title: string;
  company: string;
  image: string;
  rate: number;

  userName: string = '';
  show: boolean = true;

  videojuegos = [
    {
      id: 1,
      title: 'The Legend of Zelda',
      company: 'Nintendo',
      image: 'assets/img/zelda.jpg',
      rate: 9.5,
    },
    {
      id: 2,
      title: 'Jack and Daxter',
      company: 'Naughty Dog',
      image: 'assets/img/jackdaxter.jpeg',
      rate: 9.8,
    },
    {
      id: 3,
      title: 'The Witcher 3: Wild Hunt',
      company: 'CD Projekt',
      image: 'assets/img/the-witcher.jpg',
      rate: 9.7,
    },
    {
      id: 4,
      title: 'Super Mario Odyssey',
      company: 'Nintendo',
      image: 'assets/img/smodissey.jpeg',
      rate: 9.6,
    },
    {
      id: 5,
      title: 'Gran Turismo 7',
      company: 'Polyphony Digital',
      image: 'assets/img/gt7.avif',
      rate: 9.9,
    },
  ];

  constructor(route: ActivatedRoute) {
    this.id = 0;
    this.title = '';
    this.company = '';
    this.image = '';
    this.rate = 0;
    this.userName = route.snapshot.queryParams['userName'];
    //lo que me llega por parámetro: username es el nombre del parámetro
  }
}
