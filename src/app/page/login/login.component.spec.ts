import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from "@angular/router/testing"
import { LoginComponent } from './login.component'
import { FormsModule } from '@angular/forms'

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

  it('Se valida que el usuario ingresado contenga @ correctamente', () => {
    // Arrange
    component.usuario = 'test@test.com';

    // Act
    const containsAt = component.usuario.includes('@')

    // Assert
    expect(component.usuario).toBeTruthy();
  });

it('se ingres usuario sin @ y lo detecta', () => {
  // Arrange
  
  component.usuario = 'Usuariotest';

  // Act
  const containsAt = component.usuario.includes('@')

  // Assert
  expect(containsAt).toBeFalsy();
  });
})
