import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideojuegosComponent } from '../videojuegos/videojuegos.component';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css'],
})
export class DetalleVideojuegoComponent implements OnInit {
  videojuegoId: number | undefined;
  videojuego: VideojuegosComponent['videojuegos'][0] | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  // Obtiene el id de la URL
  ngOnInit(): void {
    this.videojuegoId = +this.route.snapshot.params['id']; // Convierte el id a number
    this.obtenerVideojuego();
  }

  // Busca el videojuego en el array de vieojuegos de VideojugosComponent a partir del id que recibe
  obtenerVideojuego(): void {
    const videojuegosComponent = new VideojuegosComponent(this.router);
    this.videojuego = videojuegosComponent.videojuegos.find(
      (vj) => vj.id === this.videojuegoId
    );
  }

  volver(): void {
    this.router.navigate(['/videojuegos']);
  }
}
