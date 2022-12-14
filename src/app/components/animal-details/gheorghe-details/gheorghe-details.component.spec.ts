import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GheorgheDetailsComponent } from './gheorghe-details.component';

describe('GheorgheDetailsComponent', () => {
  let component: GheorgheDetailsComponent;
  let fixture: ComponentFixture<GheorgheDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GheorgheDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GheorgheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
