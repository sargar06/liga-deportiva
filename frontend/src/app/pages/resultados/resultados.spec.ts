import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Resultados } from './resultados';

describe('Resultados', () => {
  let component: Resultados;
  let fixture: ComponentFixture<Resultados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultados],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Resultados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
