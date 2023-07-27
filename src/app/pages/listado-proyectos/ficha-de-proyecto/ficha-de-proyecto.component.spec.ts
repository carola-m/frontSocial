import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDeProyectoComponent } from './ficha-de-proyecto.component';

describe('FichaDeProyectoComponent', () => {
  let component: FichaDeProyectoComponent;
  let fixture: ComponentFixture<FichaDeProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichaDeProyectoComponent]
    });
    fixture = TestBed.createComponent(FichaDeProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
