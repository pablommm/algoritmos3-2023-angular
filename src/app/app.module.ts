import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component'
import { PerfilUsuarioFiguritasFalComponent } from './perfil-usuario-figuritas-fal/perfil-usuario-figuritas-fal.component'
import { PerfilUsuarioFiguritasRepComponent } from './perfil-usuario-figuritas-rep/perfil-usuario-figuritas-rep.component'
import { FooterComponent } from './footer/footer.component'
import { NavComponent } from './nav/nav.component'
import { CardComponent } from './card/card.component'
import { FormsModule } from '@angular/forms'
import { DetallesFiguritaComponent } from './detallesFigurita/detallesFigurita.component';
import { ButtonComponent } from './button/button.component';
import { BusquedaSobresComponent } from './busquedaSobres/busquedaSobres.component';
import { BusquedaFiguritasPerfilComponent } from './busquedaFiguritasPerfil/busquedaFiguritasPerfil.component';
import { BusquedaFiguritasComponent } from './busquedaFiguritas/busquedaFiguritas.component';
import { SearchBarComponent } from './searchBar/searchBar.component';
import { CardSobresComponent } from './cardSobres/cardSobres.component';

@NgModule({
  declarations: [							
    AppComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    PerfilUsuarioFiguritasFalComponent,
    PerfilUsuarioFiguritasRepComponent,
    FooterComponent,
    NavComponent,
    CardComponent,
      DetallesFiguritaComponent,
      ButtonComponent,
      BusquedaSobresComponent,
      BusquedaFiguritasPerfilComponent,
      BusquedaFiguritasComponent,
      SearchBarComponent,
      CardSobresComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
