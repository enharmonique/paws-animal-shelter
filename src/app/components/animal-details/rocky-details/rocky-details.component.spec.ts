import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockyDetailsComponent } from './rocky-details.component';

describe('RockyDetailsComponent', () => {
  let component: RockyDetailsComponent;
  let fixture: ComponentFixture<RockyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
