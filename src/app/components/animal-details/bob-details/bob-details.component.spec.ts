import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobDetailsComponent } from './bob-details.component';

describe('BobDetailsComponent', () => {
  let component: BobDetailsComponent;
  let fixture: ComponentFixture<BobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BobDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
