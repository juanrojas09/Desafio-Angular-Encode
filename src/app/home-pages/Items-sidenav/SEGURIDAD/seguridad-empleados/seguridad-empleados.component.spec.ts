import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadEmpleadosComponent } from './seguridad-empleados.component';

describe('SeguridadEmpleadosComponent', () => {
  let component: SeguridadEmpleadosComponent;
  let fixture: ComponentFixture<SeguridadEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
