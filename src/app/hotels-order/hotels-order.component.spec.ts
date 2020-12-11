import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsOrderComponent } from './hotels-order.component';

describe('HotelsOrderComponent', () => {
  let component: HotelsOrderComponent;
  let fixture: ComponentFixture<HotelsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
