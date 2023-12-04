import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideojuegosComponent } from '../listaVideojuegos/listaVideojuegos.component'
import '../listaVideojuegos/listaVideojuegos.component'
import { VerDetallesComponent } from './ver-detalles.component';

describe('VerDetallesComponent', () => {
  let component: VerDetallesComponent;
  let fixture: ComponentFixture<VerDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
