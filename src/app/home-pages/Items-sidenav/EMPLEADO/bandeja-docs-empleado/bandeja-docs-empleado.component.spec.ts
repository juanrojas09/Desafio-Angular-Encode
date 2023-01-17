import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaDocsEmpleadoComponent } from './bandeja-docs-empleado.component';

describe('BandejaDocsEmpleadoComponent', () => {
  let component: BandejaDocsEmpleadoComponent;
  let fixture: ComponentFixture<BandejaDocsEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejaDocsEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandejaDocsEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
