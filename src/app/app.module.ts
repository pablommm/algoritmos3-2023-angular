import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { PerfilUsuarioComponent } from './page/perfil-usuario/perfil-usuario.component'
import { PerfilUsuarioFiguritasFalComponent } from './page/perfil-usuario-figuritas-fal/perfil-usuario-figuritas-fal.component'
import { PerfilUsuarioFiguritasRepComponent } from './page/perfil-usuario-figuritas-rep/perfil-usuario-figuritas-rep.component'
import { FormsModule } from '@angular/forms'
import { DetallesFiguritaComponent } from './detallesFigurita/detallesFigurita.component'
import { ButtonComponent } from './Componente/button/button.component'
import { BusquedaSobresComponent } from './busquedaSobres/busquedaSobres.component'
import { BusquedaFiguritasPerfilComponent } from './busquedaFiguritasPerfil/busquedaFiguritasPerfil.component'
import { BusquedaFiguritasComponent } from './busquedaFiguritas/busquedaFiguritas.component'
import { SearchBarComponent } from './Componente/searchBar/searchBar.component'
import { CardSobresComponent } from './Componente/cardSobres/cardSobres.component'
import { FooterComponent } from './Componente/footer/footer.component'
import { NavComponent } from './Componente/nav/nav.component'
import { CardComponent } from './Componente/card/card.component'

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
