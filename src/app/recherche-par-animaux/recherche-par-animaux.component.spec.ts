import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParAnimauxComponent } from './recherche-par-animaux.component';

describe('RechercheParAnimauxComponent', () => {
  let component: RechercheParAnimauxComponent;
  let fixture: ComponentFixture<RechercheParAnimauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParAnimauxComponent]
    });
    fixture = TestBed.createComponent(RechercheParAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
