import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionpageItemComponent } from './adoptionpage-item.component';

describe('AdoptionpageItemComponent', () => {
  let component: AdoptionpageItemComponent;
  let fixture: ComponentFixture<AdoptionpageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionpageItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionpageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
