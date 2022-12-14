import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuluDetailsComponent } from './lulu-details.component';

describe('LuluDetailsComponent', () => {
  let component: LuluDetailsComponent;
  let fixture: ComponentFixture<LuluDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuluDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuluDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
