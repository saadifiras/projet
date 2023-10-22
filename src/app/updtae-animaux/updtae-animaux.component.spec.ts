import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdtaeAnimauxComponent } from './updtae-animaux.component';

describe('UpdtaeAnimauxComponent', () => {
  let component: UpdtaeAnimauxComponent;
  let fixture: ComponentFixture<UpdtaeAnimauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdtaeAnimauxComponent]
    });
    fixture = TestBed.createComponent(UpdtaeAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
