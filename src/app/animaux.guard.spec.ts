
import { TestBed } from '@angular/core/testing';
import { AnimauxGuard } from './animaux.guard';



describe('ProduitGuard', () => {
  let guard: AnimauxGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnimauxGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});