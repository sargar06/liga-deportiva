import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Competiciones } from './competiciones';

describe('Competiciones', () => {
  let component: Competiciones;
  let fixture: ComponentFixture<Competiciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Competiciones],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Competiciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
