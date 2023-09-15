import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioFiguritasRepComponent } from './perfil-usuario-figuritas-rep.component';

describe('PerfilUsuarioFiguritasRepComponent', () => {
  let component: PerfilUsuarioFiguritasRepComponent;
  let fixture: ComponentFixture<PerfilUsuarioFiguritasRepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUsuarioFiguritasRepComponent]
    });
    fixture = TestBed.createComponent(PerfilUsuarioFiguritasRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
