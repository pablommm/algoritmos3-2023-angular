import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { FiltroComponent } from './filtro.component'

describe('FiltroComponent', () => {
  let component: FiltroComponent
  let fixture: ComponentFixture<FiltroComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroComponent],
      imports: [FormsModule]
    })
    fixture = TestBed.createComponent(FiltroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
