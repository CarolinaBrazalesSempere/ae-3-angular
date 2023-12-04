import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'videojuegos/:id', component: DetalleVideojuegoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: '', redirectTo: '/videojuegos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
