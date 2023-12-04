import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogameComponent } from './videogame/videogame.component';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { VgDetailComponent } from './vg-detail/vg-detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    ContactComponent,
    AboutUsComponent,
    NavMenuComponent,
    VgDetailComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
