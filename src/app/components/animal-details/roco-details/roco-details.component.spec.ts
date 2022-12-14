import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocoDetailsComponent } from './roco-details.component';

describe('RocoDetailsComponent', () => {
  let component: RocoDetailsComponent;
  let fixture: ComponentFixture<RocoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
