/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { BusquedaSobresComponent } from './busquedaSobres.component'
import { NavComponent } from 'src/app/Componente/nav/nav.component'

describe('BusquedaSobresComponent', () => {
  let component: BusquedaSobresComponent
  let fixture: ComponentFixture<BusquedaSobresComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaSobresComponent, NavComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaSobresComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
