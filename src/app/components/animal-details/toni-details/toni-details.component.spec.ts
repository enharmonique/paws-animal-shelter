import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToniDetailsComponent } from './toni-details.component';

describe('ToniDetailsComponent', () => {
  let component: ToniDetailsComponent;
  let fixture: ComponentFixture<ToniDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToniDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
