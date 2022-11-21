import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzadayComponent } from './pizzaday.component';

describe('PizzadayComponent', () => {
  let component: PizzadayComponent;
  let fixture: ComponentFixture<PizzadayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzadayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzadayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
