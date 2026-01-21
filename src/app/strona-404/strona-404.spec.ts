import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strona404 } from './strona-404';

describe('Strona404', () => {
  let component: Strona404;
  let fixture: ComponentFixture<Strona404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Strona404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Strona404);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
