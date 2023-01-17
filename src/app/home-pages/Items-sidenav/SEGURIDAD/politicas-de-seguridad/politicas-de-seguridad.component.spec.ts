import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasDeSeguridadComponent } from './politicas-de-seguridad.component';

describe('PoliticasDeSeguridadComponent', () => {
  let component: PoliticasDeSeguridadComponent;
  let fixture: ComponentFixture<PoliticasDeSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticasDeSeguridadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticasDeSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
