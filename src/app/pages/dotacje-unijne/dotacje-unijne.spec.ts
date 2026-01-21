import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotacjeUnijne } from './dotacje-unijne';

describe('DotacjeUnijne', () => {
  let component: DotacjeUnijne;
  let fixture: ComponentFixture<DotacjeUnijne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotacjeUnijne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotacjeUnijne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
