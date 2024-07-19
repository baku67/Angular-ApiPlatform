import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramPaletComponent } from './diagram-palet.component';

describe('DiagramPaletComponent', () => {
  let component: DiagramPaletComponent;
  let fixture: ComponentFixture<DiagramPaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramPaletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramPaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
