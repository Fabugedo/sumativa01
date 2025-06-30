import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmarArriendoPage } from './confirmar-arriendo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarArriendoPage
  },
  {
    path: ':id',
    component: ConfirmarArriendoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarArriendoPageRoutingModule {}
