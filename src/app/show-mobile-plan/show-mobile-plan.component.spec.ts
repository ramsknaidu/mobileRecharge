import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMobilePlanComponent } from './show-mobile-plan.component';

describe('ShowMobilePlanComponent', () => {
  let component: ShowMobilePlanComponent;
  let fixture: ComponentFixture<ShowMobilePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMobilePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMobilePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
