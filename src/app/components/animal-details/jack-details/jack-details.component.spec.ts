import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackDetailsComponent } from './jack-details.component';

describe('JackDetailsComponent', () => {
  let component: JackDetailsComponent;
  let fixture: ComponentFixture<JackDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
