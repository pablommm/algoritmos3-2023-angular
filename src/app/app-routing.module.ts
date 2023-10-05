import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PerfilUsuarioComponent } from './page/perfil-usuario/perfil-usuario.component'
import { PerfilUsuarioFiguritasRepComponent } from './page/perfil-usuario-figuritas-rep/perfil-usuario-figuritas-rep.component'
import { PerfilUsuarioFiguritasFalComponent } from './page/perfil-usuario-figuritas-fal/perfil-usuario-figuritas-fal.component'
import { DetallesFiguritaComponent } from './page/detallesFigurita/detallesFigurita.component'
import { BusquedaFiguritasComponent } from './page/busquedaFiguritas/busquedaFiguritas.component'
import { BusquedaSobresComponent } from './page/busquedaSobres/busquedaSobres.component'
import { BusquedaFiguritasPerfilComponent } from './page/busquedaFiguritasPerfil/busquedaFiguritasPerfil.component'
import { LoginComponent } from './page/login/login.component'



const routes: Routes = [

/*   {path:'Perfil', component:PerfilUsuarioComponent,children:[
    {path:'Perfil/FiguritaRepetida', component:PerfilUsuarioFiguritasRepComponent},
    {path:'FiguritaFaltante', component:PerfilUsuarioFiguritasFalComponent},
  ]}, */
  {path:'Perfil', component:PerfilUsuarioComponent},
  {path:'Perfil/FiguritaRepetida', component:PerfilUsuarioFiguritasRepComponent},
  {path:'Perfil/FiguritaFaltante', component:PerfilUsuarioFiguritasFalComponent},
  {path:'DetalleFigurita', component:DetallesFiguritaComponent},
  {path:'BusquedaSobre', component:BusquedaSobresComponent},
  {path:'BusquedaFiguritasPerfil', component:BusquedaFiguritasPerfilComponent},
  {path:'BusquedaFiguritas', component:BusquedaFiguritasComponent},
  {path:'Login', component:LoginComponent},
  {path:'**', component:BusquedaFiguritasComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
