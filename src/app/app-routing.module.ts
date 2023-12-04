import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Videojuego } from './videojuego/videojuego.component';
import { VideojuegosComponent } from './listaVideojuegos/listaVideojuegos.component';
import { CommonEngine } from '@angular/ssr';
import { MenuComponent } from './menu/menu.component';
import { VerDetallesComponent } from './verDetalles/verDetalles.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {
    path:'',
    component: VideojuegosComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'verDetalles/:id/:titulo/:compania/:imagen/:valoracion',
    component: VerDetallesComponent
  },
  {
    path: 'contactanos',
    component: ContactanosComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
