import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioFiguritasFalComponent } from './perfil-usuario-figuritas-fal.component';

describe('PerfilUsuarioFiguritasFalComponent', () => {
  let component: PerfilUsuarioFiguritasFalComponent;
  let fixture: ComponentFixture<PerfilUsuarioFiguritasFalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUsuarioFiguritasFalComponent]
    });
    fixture = TestBed.createComponent(PerfilUsuarioFiguritasFalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
