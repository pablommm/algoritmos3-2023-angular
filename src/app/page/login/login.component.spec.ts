import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from "@angular/router/testing"
import { LoginComponent } from './login.component'
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule, FormsModule
    ],
    })
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
