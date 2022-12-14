import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BogdiDetailsComponent } from './bogdi-details.component';

describe('BogdiDetailsComponent', () => {
  let component: BogdiDetailsComponent;
  let fixture: ComponentFixture<BogdiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BogdiDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BogdiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
