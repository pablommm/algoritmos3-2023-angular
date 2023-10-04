import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http' // Agrega HttpClientModule
import { FormsModule } from '@angular/forms' // Agrega FormsModule
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './page/login/login.component'
import { PerfilUsuarioComponent } from './page/perfil-usuario/perfil-usuario.component'
import { PerfilUsuarioFiguritasFalComponent } from './page/perfil-usuario-figuritas-fal/perfil-usuario-figuritas-fal.component'
import { PerfilUsuarioFiguritasRepComponent } from './page/perfil-usuario-figuritas-rep/perfil-usuario-figuritas-rep.component'
import { BusquedaSobresComponent } from './page/busquedaSobres/busquedaSobres.component'
import { BusquedaFiguritasPerfilComponent } from './page/busquedaFiguritasPerfil/busquedaFiguritasPerfil.component'
import { BusquedaFiguritasComponent } from './page/busquedaFiguritas/busquedaFiguritas.component'
import { SearchBarComponent } from './Componente/searchBar/searchBar.component'
import { CardSobresComponent } from './Componente/cardSobres/cardSobres.component'
import { FooterComponent } from './Componente/footer/footer.component'
import { NavComponent } from './Componente/nav/nav.component'
import { CardComponent } from './Componente/card/card.component'
import { DetallesFiguritaComponent } from './page/detallesFigurita/detallesFigurita.component'
import { FiguritaService } from './services/figurita.service'
import { FiltroComponent } from './Componente/filtro/filtro.component'
import { FiltroOrdenarPorComponent } from './Componente/filtro-ordenar-por/filtro-ordenar-por.component'
import { NombreApellidoPipe } from './pipes/nombreApellido.pipe'
import { PrecioSobrePipe } from './pipes/precioSobre.pipe'
import { ToolBooxComponent } from './Componente/tool-boox/tool-boox.component'
import { TabComponent } from './Componente/tab/tab.component'
import { FormComponent } from './Componente/form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    PerfilUsuarioFiguritasFalComponent,
    PerfilUsuarioFiguritasRepComponent,
    BusquedaSobresComponent,
    BusquedaFiguritasPerfilComponent,
    BusquedaFiguritasComponent,
    SearchBarComponent,
    CardSobresComponent,
    FooterComponent,
    NavComponent,
    CardComponent,
    DetallesFiguritaComponent,
    FiltroComponent,
    FiltroOrdenarPorComponent,
    NombreApellidoPipe,
    PrecioSobrePipe,
    ToolBooxComponent,
    TabComponent,
    FormComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [FiguritaService,],
  bootstrap: [AppComponent],
})
export class AppModule {}
