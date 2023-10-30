/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing'
/* import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'; */
import { FormComponent } from './form.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

describe('FormComponent', () => {
  let component: FormComponent
  let fixture: ComponentFixture<FormComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [FormsModule, HttpClientModule]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
