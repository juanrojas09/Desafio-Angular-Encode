import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSeguridadComponent } from './dashboard-seguridad.component';

describe('DashboardSeguridadComponent', () => {
  let component: DashboardSeguridadComponent;
  let fixture: ComponentFixture<DashboardSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSeguridadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
