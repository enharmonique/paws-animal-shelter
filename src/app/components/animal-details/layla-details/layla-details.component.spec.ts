import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaylaDetailsComponent } from './layla-details.component';

describe('LaylaDetailsComponent', () => {
  let component: LaylaDetailsComponent;
  let fixture: ComponentFixture<LaylaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaylaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaylaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
