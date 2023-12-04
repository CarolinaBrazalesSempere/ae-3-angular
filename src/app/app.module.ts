import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './listaVideojuegos/listaVideojuegos.component';
import { VerDetallesComponent } from './verDetalles/verDetalles.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    VerDetallesComponent,
    MenuComponent,
    ContactanosComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
