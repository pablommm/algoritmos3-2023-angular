/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { CardSobresComponent } from './cardSobres.component'

describe('CardSobresComponent', () => {
  let component: CardSobresComponent
  let fixture: ComponentFixture<CardSobresComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSobresComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSobresComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
