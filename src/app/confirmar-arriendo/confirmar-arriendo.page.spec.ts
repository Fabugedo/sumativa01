import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarArriendoPage } from './confirmar-arriendo.page';

describe('ConfirmarArriendoPage', () => {
  let component: ConfirmarArriendoPage;
  let fixture: ComponentFixture<ConfirmarArriendoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarArriendoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
