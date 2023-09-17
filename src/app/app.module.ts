import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component'
import { PerfilUsuarioFiguritasFalComponent } from './perfil-usuario-figuritas-fal/perfil-usuario-figuritas-fal.component'
import { PerfilUsuarioFiguritasRepComponent } from './perfil-usuario-figuritas-rep/perfil-usuario-figuritas-rep.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    PerfilUsuarioFiguritasFalComponent,
    PerfilUsuarioFiguritasRepComponent,
    FooterComponent,
    NavComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
