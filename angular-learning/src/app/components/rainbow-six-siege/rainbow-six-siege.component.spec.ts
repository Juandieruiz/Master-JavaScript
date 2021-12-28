import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowSixSiegeComponent } from './rainbow-six-siege.component';

describe('RainbowSixSiegeComponent', () => {
  let component: RainbowSixSiegeComponent;
  let fixture: ComponentFixture<RainbowSixSiegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainbowSixSiegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainbowSixSiegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
