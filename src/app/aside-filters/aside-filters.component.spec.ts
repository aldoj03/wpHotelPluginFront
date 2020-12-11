import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFiltersComponent } from './aside-filters.component';

describe('AsideFiltersComponent', () => {
  let component: AsideFiltersComponent;
  let fixture: ComponentFixture<AsideFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
