import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddanimauxComponent } from './addanimaux.component';

describe('AddanimauxComponent', () => {
  let component: AddanimauxComponent;
  let fixture: ComponentFixture<AddanimauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddanimauxComponent]
    });
    fixture = TestBed.createComponent(AddanimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
