import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacjePrawne } from './informacje-prawne';

describe('InformacjePrawne', () => {
  let component: InformacjePrawne;
  let fixture: ComponentFixture<InformacjePrawne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacjePrawne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacjePrawne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
