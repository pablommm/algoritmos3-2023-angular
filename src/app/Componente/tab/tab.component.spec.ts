/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
/* import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core' */
import { Router, ActivatedRoute } from '@angular/router'

import { TabComponent } from './tab.component'



describe('TabComponent', () => {
  let component: TabComponent
  let fixture: ComponentFixture<TabComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
/*  es posible testear en el front el como los tabs redirijen?
  it('should create', () => {
    
    // Obtener la ruta actual
    const routePath = this.currentUrl

    // Comprobar que la ruta actual es "/"
    expect(routePath).toEqual('/')

    // Cambiar a la ruta "/about"
    this.router.navigate(['/about'])

    // Comprobar que la ruta actual es "/about"
    expect(routePath).toEqual('/about')

  })

  */
})
