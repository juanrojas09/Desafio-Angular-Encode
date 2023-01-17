import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosEmpleadosComponent } from './certificados-empleados.component';

describe('CertificadosEmpleadosComponent', () => {
  let component: CertificadosEmpleadosComponent;
  let fixture: ComponentFixture<CertificadosEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadosEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
