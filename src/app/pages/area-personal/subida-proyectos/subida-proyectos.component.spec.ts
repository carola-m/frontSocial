import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubidaProyectosComponent } from './subida-proyectos.component';

describe('SubidaProyectosComponent', () => {
  let component: SubidaProyectosComponent;
  let fixture: ComponentFixture<SubidaProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubidaProyectosComponent]
    });
    fixture = TestBed.createComponent(SubidaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
