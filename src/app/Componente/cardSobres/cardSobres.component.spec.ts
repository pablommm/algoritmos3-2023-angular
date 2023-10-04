/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { RouterTestingModule } from "@angular/router/testing"
import { RouterModule } from '@angular/router'


import { CardSobresComponent } from './cardSobres.component'

describe('CardSobresComponent', () => {
  let component: CardSobresComponent
  let fixture: ComponentFixture<CardSobresComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSobresComponent ],
      imports: [
        RouterTestingModule, RouterModule.forRoot([]) 
    ],
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
