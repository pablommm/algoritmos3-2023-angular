/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
/* import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core' */
import { DetallesFiguritaComponent } from './detallesFigurita.component'
import { RouterTestingModule } from '@angular/router/testing'
import { NavComponent } from 'src/app/Componente/nav/nav.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { NombreApellidoPipe } from 'src/app/pipes/nombreApellido.pipe'

describe('DetallesFiguritaComponent', () => {
  let component: DetallesFiguritaComponent
  let fixture: ComponentFixture<DetallesFiguritaComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetallesFiguritaComponent,
        NavComponent,
        NombreApellidoPipe
      ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesFiguritaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('when clicking on a card, it shows its details', () => {
    getByTestId('ampliarDetalles').click()
    expect(getByTestId('figuritaNombreUsuario').textContent.toBe('frantano'))
  })

  function getByTestId(testId: string) {
    const resultHtml = fixture.debugElement.nativeElement
    return resultHtml.querySelector(`[data-testid="${testId}"]`)
  }
})
