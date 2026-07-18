import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalSymbolsComponent } from './national-symbols.component';

describe('NationalSymbolsComponent', () => {
  let component: NationalSymbolsComponent;
  let fixture: ComponentFixture<NationalSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationalSymbolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
