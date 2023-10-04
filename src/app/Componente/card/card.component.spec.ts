import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from "@angular/router/testing"
import { CardComponent } from './card.component'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [RouterTestingModule],
    })
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
