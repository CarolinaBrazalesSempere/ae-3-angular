import { VerDetallesComponent } from '../verDetalles/verDetalles.component';
import { Component } from '@angular/core';
import { Videojuego } from '../videojuego/videojuego.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaVideojuegos',
  templateUrl: './listaVideojuegos.component.html',
  styleUrl: './listaVideojuegos.component.css'
})

export class VideojuegosComponent {

  listaVideojuegos: Videojuego[] = []

  videojuegoSeleccionado: Videojuego | null = null;

  id :number = 0;
  titulo: string = '';
  compania: string = '';
  imagen: string = ''
  valoracion: number = 0;


  constructor(private router: Router) {

    this.listaVideojuegos = [
      new Videojuego(1,
        "Diablo IV",
        "Blizzard",
        "https://image.api.playstation.com/vulcan/ap/rnd/202212/0522/Dzry5RAwU9HsJGXZ3PUSYgCa.jpg",
        8.78),

      new Videojuego(2,
        "Destiny 2",
        "Bungie",
        "https://uhdwallpapers.org/uploads/converted/18/06/25/destiny-2-forsaken-1080x1920_79846-mm-90.jpg",
        7.28),
      new Videojuego(3,
        "Animal crossing: New horizons",
        "nintendo",
        "https://www.xtrafondos.com/wallpapers/vertical/animal-crossing-new-horizons-6457.jpg",
        8.64),
      new Videojuego(3,
        "Hogwarts Legacy",
        "nintendo",
        "https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/Ah7Ar9MU0r1BBlzAUflmhyQP.png",
        8.64),
    ]
  }

  irADetalles(id: number): void {
    const videojuego = this.listaVideojuegos.find((v) => v.id === id);

    if (videojuego) {
      this.router.navigate(['/ver-detalles', {
        id: videojuego.id,
        titulo: videojuego.titulo,
        compania: videojuego.compania,
        imagen: videojuego.imagen,
        valoracion: videojuego.valoracion
      }]);
    }
  }
}
