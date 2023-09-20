import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './page/login/login.component'
import { PerfilUsuarioComponent } from './page/perfil-usuario/perfil-usuario.component'
import { PerfilUsuarioFiguritasFalComponent } from './page/perfil-usuario-figuritas-fal/perfil-usuario-figuritas-fal.component'
import { PerfilUsuarioFiguritasRepComponent } from './page/perfil-usuario-figuritas-rep/perfil-usuario-figuritas-rep.component'
import { FormsModule } from '@angular/forms'
import { ButtonComponent } from './Componente/button/button.component'
import { BusquedaSobresComponent } from './page/busquedaSobres/busquedaSobres.component'
import { BusquedaFiguritasPerfilComponent } from './page/busquedaFiguritasPerfil/busquedaFiguritasPerfil.component'
import { BusquedaFiguritasComponent } from './page/busquedaFiguritas/busquedaFiguritas.component'
import { SearchBarComponent } from './Componente/searchBar/searchBar.component'
import { CardSobresComponent } from './Componente/cardSobres/cardSobres.component'
import { FooterComponent } from './Componente/footer/footer.component'
import { NavComponent } from './Componente/nav/nav.component'
import { CardComponent } from './Componente/card/card.component'
import { DetallesFiguritaComponent } from './page/detallesFigurita/detallesFigurita.component'

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
