import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedomFightersComponent } from './freedom-fighters.component';

describe('FreedomFightersComponent', () => {
  let component: FreedomFightersComponent;
  let fixture: ComponentFixture<FreedomFightersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreedomFightersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreedomFightersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
