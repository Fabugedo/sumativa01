import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraciasPage } from './gracias.page';

describe('GraciasPage', () => {
  let component: GraciasPage;
  let fixture: ComponentFixture<GraciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GraciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
