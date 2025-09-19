import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicedemo } from './servicedemo';

describe('Servicedemo', () => {
  let component: Servicedemo;
  let fixture: ComponentFixture<Servicedemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicedemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicedemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
