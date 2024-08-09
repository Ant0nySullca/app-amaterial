import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsullcaEjercicio3Component } from './asullca-ejercicio3.component';

describe('AsullcaEjercicio3Component', () => {
  let component: AsullcaEjercicio3Component;
  let fixture: ComponentFixture<AsullcaEjercicio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsullcaEjercicio3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsullcaEjercicio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
