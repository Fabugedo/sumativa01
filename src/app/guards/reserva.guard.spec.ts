import { TestBed } from '@angular/core/testing';


import { ReservaGuard } from './reserva.guard';


describe('ReservaGuard', () => {
  let guard: ReservaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReservaGuard,

      ]
    });
    guard = TestBed.inject(ReservaGuard);
  });

  it('should be created', () => {
    // @ts-ignore
    expect(guard).toBeTruthy();
  });
});
