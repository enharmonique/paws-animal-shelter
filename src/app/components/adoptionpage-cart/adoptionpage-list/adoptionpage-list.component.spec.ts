import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionpageListComponent } from './adoptionpage-list.component';

describe('AdoptionpageListComponent', () => {
  let component: AdoptionpageListComponent;
  let fixture: ComponentFixture<AdoptionpageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionpageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionpageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
