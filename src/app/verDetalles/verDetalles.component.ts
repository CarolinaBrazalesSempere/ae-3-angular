import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verDetalles',
  templateUrl: './verDetalles.component.html',
  styleUrl: './verDetalles.component.css'
})
export class VerDetallesComponent {

  id : number;
  titulo : string;
  compania : string
  imagen : string
  valoracion : number

  constructor(route:ActivatedRoute){

    this.id = route.snapshot.params["id"];
    this.titulo = route.snapshot.params["titulo"];
    this.compania = route.snapshot.params["compania"];
    this.imagen = route.snapshot.params["imagen"];
    this.valoracion = route.snapshot.params["valoracion"];

  }
}
