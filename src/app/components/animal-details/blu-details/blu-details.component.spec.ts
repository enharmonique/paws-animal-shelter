import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluDetailsComponent } from './blu-details.component';

describe('BluDetailsComponent', () => {
  let component: BluDetailsComponent;
  let fixture: ComponentFixture<BluDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
