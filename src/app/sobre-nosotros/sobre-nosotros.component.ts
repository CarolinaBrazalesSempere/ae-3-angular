// src/app/sobre-nosotros/sobre-nosotros.component.ts
import { Component } from '@angular/core';

export class SobreNosotros {
  sobreNosotros: string = '';

  constructor() {
    this.sobreNosotros =
      'Somos un grupo de alumnos de 2º de DAW que estamos muy agobiados con todas las actividades que hemos entregado esta semana y con los exámenes que tenemos en unos días.';
  }
}

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css'],
})
export class SobreNosotrosComponent {
  sobreNosotros: SobreNosotros = new SobreNosotros();
}
