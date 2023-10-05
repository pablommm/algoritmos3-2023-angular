import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FiltroOrdenarPorComponent } from './filtro-ordenar-por.component'

describe('FiltroOrdenarPorComponent', () => {
  let component: FiltroOrdenarPorComponent
  let fixture: ComponentFixture<FiltroOrdenarPorComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroOrdenarPorComponent]
    })
    fixture = TestBed.createComponent(FiltroOrdenarPorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
