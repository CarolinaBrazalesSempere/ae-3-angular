import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export class Videojuego {
  constructor(
    public id: number,
    public titulo: string,
    public compania: string,
    public imagen: string,
    public media: number
  ) {}
}

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css'],
})
export class VideojuegosComponent implements OnInit {
  videojuegos: Videojuego[] = [
    new Videojuego(1, 'Diablo', 'Blizzard', 'dia1.jpg', 8),
    new Videojuego(2, 'Icewind Dale', 'Black Isle', 'id.jpg', 7.8),
    new Videojuego(3, 'Max Payne', 'Remedy Entertainment', 'mp.jpg', 8.8),
    new Videojuego(4, 'Heroes of Might and Magic II', 'NWC', 'hero2.jpg', 7.9),
    new Videojuego(5, 'Dungeon Keeper II', 'Bullfrog Productions', 'dk2.jpg', 8.3)
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  verDetalle(id: number): void {
    this.router.navigate(['/videojuegos', id]);
  }
}
