import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PerfilUsuarioComponent } from './page/perfil-usuario/perfil-usuario.component'
/* import { PerfilUsuarioFiguritasRepComponent } from './page/perfil-usuario-figuritas-rep/perfil-usuario-figuritas-rep.component'
import { PerfilUsuarioFiguritasFalComponent } from './page/perfil-usuario-figuritas-fal/perfil-usuario-figuritas-fal.component' */
import { DetallesFiguritaComponent } from './page/detallesFigurita/detallesFigurita.component'
import { BusquedaFiguritasComponent } from './page/busquedaFiguritas/busquedaFiguritas.component'
import { BusquedaSobresComponent } from './page/busquedaSobres/busquedaSobres.component'
/* import { BusquedaFiguritasPerfilComponent } from './page/busquedaFiguritasPerfil/busquedaFiguritasPerfil.component' */
import { LoginComponent } from './page/login/login.component'
import { FormComponent } from './Componente/form/form.component'
import { FiguritaService } from './services/figurita.service'
import { FiltroFiguritas } from './dominio/filtro'
import { FiguritaUsuario } from './dominio/figurita'

export type DataBusquedaFigurita = {
  realizar: (
    figuritaService: FiguritaService,
    filtro: FiltroFiguritas
  ) => Promise<FiguritaUsuario[]>
}

const dataBusquedaFigurita = {
  realizar: async (figuritaService: FiguritaService, filtro: FiltroFiguritas) =>
    figuritaService.todasLasFiguritas(filtro)
}

const dataBusquedaFiguritaRep = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  realizar: async (figuritaService: FiguritaService, filtro: FiltroFiguritas) =>
    figuritaService.figuritasRepetidasUsuario()
}

const dataBusquedaFiguritaFal = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  realizar: async (figuritaService: FiguritaService, filtro: FiltroFiguritas) =>
    figuritaService.figuritasFaltantesUsuario()
}

const dataAgregarFigurita = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  realizar: async (figuritaService: FiguritaService, filtro: FiltroFiguritas) =>
    figuritaService.todasLasFiguritaDelAlbum(filtro)
}

const routes: Routes = [
  {
    path: 'Perfil',
    component: PerfilUsuarioComponent,
    children: [
      { path: 'padinfo', component: FormComponent },
      {
        path: 'FiguritaRepetida',
        data: dataBusquedaFiguritaRep,
        component: BusquedaFiguritasComponent
      },
      {
        path: 'FiguritaFaltante',
        data: dataBusquedaFiguritaFal,
        component: BusquedaFiguritasComponent
      }
    ]
  },
  // {path:'Perfil', component:PerfilUsuarioComponent},
  // {path:'Perfil/FiguritaRepetida', component:PerfilUsuarioFiguritasRepComponent},
  // {path:'Perfil/FiguritaFaltante', component:PerfilUsuarioFiguritasFalComponent},
  {
    path: 'DetalleFigurita/:id/:idUsuario',
    component: DetallesFiguritaComponent
  },
  { path: 'BusquedaSobre', component: BusquedaSobresComponent },
  {
    path: 'BusquedaFiguritasPerfil',
    data: dataAgregarFigurita,
    component: BusquedaFiguritasComponent
  },
  {
    path: 'BusquedaFiguritas',
    data: dataBusquedaFigurita,
    component: BusquedaFiguritasComponent
  },
  { path: 'Login', component: LoginComponent },
  { path: '**', component: BusquedaFiguritasComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
