import { of } from 'rxjs'
import { Figurita, FiguritaUsuario } from './../dominio/figurita'
import { REST_SERVER_URL } from './configuration'

export const figuritaPrincipal = new Figurita(
  1,
  'Enzo',
  'Fernández',
  '11/04/1999',
  7,
  'Argentina',
  2022,
  1.87,
  78,
  'Mediocampista',
  'Argentina',
  '200000',
  true,
  'Alta',
  true,
  'imagen',
  25,
  200,
  250,
  1,
  3,
  17
)
export const FiguritaUsuarioPrincipal = new FiguritaUsuario(
  1,
  'frantano',
  figuritaPrincipal
)

/* const figuritasStub = [figuritaPrincipal] */

export const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])

/* httpClientSpy.get
  .withArgs(`${REST_SERVER_URL}/FiguritasRepetidas`)
  .and.returnValue(of(figuritasStub)) */

httpClientSpy.get
  .withArgs(`${REST_SERVER_URL}/DetallesFigurita/1`)
  .and.returnValue(of(figuritaPrincipal))
