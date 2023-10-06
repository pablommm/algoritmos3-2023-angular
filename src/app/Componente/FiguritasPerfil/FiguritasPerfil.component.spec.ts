/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
/* import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core' */
import { RouterTestingModule } from "@angular/router/testing"
import { CardComponent } from '../card/card.component'
import { TabComponent } from '../tab/tab.component'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'
import { FiguritasPerfilComponent } from './FiguritasPerfil.component'

describe('FiguritasPerfilComponent', () => {
  let component: FiguritasPerfilComponent
  let fixture: ComponentFixture<FiguritasPerfilComponent>
  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiguritasPerfilComponent, CardComponent, TabComponent, NombreApellidoPipe],
      imports: [RouterTestingModule]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FiguritasPerfilComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('creando', () => {
    const fixture = TestBed.createComponent(FiguritasPerfilComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it('llamo al iniciar obtenerTodasLasFiguritas', () => {
    fixture = TestBed.createComponent(FiguritasPerfilComponent);
    component = fixture.componentInstance;
    const obtenerTodasLasFiguritasSpy = spyOn(component, 'obtenerTodasLasFiguritas');
  });
  it('testeo  obtenerTodasLasFiguritas() llenando el array de la fucnion', () => {
    fixture.detectChanges();
    expect(component.figuritas.length).toBeGreaterThan(0);
  });
})
