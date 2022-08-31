import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBadgeComponent } from './hero-badge.component';

describe('HeroBadgeComponent', () => {
  let component: HeroBadgeComponent;
  let fixture: ComponentFixture<HeroBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
