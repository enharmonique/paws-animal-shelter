import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuisDetailsComponent } from './luis-details.component';

describe('LuisDetailsComponent', () => {
  let component: LuisDetailsComponent;
  let fixture: ComponentFixture<LuisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuisDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
