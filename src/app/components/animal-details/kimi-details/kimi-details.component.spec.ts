import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimiDetailsComponent } from './kimi-details.component';

describe('KimiDetailsComponent', () => {
  let component: KimiDetailsComponent;
  let fixture: ComponentFixture<KimiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KimiDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KimiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
