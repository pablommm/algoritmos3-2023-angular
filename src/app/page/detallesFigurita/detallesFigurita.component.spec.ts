/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
/* import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core' */
import { DetallesFiguritaComponent } from './detallesFigurita.component'
import { RouterTestingModule } from "@angular/router/testing"
import { NavComponent } from 'src/app/Componente/nav/nav.component'

describe('DetallesFiguritaComponent', () => {
  let component: DetallesFiguritaComponent
  let fixture: ComponentFixture<DetallesFiguritaComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesFiguritaComponent, NavComponent ],
      imports: [
        RouterTestingModule 
    ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesFiguritaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
