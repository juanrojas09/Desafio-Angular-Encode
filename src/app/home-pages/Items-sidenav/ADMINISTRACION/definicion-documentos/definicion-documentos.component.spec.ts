import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionDocumentosComponent } from './definicion-documentos.component';

describe('DefinicionDocumentosComponent', () => {
  let component: DefinicionDocumentosComponent;
  let fixture: ComponentFixture<DefinicionDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionDocumentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefinicionDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
