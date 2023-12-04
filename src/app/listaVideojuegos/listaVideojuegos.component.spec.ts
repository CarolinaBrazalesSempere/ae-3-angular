import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosComponent } from './listaVideojuegos.component';

describe('VideojuegosComponent', () => {
  let component: VideojuegosComponent;
  let fixture: ComponentFixture<VideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideojuegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
