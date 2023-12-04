import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosComponent } from './videojuegos.component';

describe('VideojuegosComponent', () => {
  let component: VideojuegosComponent;
  let fixture: ComponentFixture<VideojuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideojuegosComponent]
    });
    fixture = TestBed.createComponent(VideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
