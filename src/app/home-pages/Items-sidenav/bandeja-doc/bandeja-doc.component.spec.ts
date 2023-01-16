import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaDocComponent } from './bandeja-doc.component';

describe('BandejaDocComponent', () => {
  let component: BandejaDocComponent;
  let fixture: ComponentFixture<BandejaDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejaDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandejaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
