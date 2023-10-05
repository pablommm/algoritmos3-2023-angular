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
})
