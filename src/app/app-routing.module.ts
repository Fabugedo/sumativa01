import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReservaGuard } from './guards/reserva.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'datos', loadChildren: () => import('./datos/datos.module').then(m => m.DatosPageModule) },
  { path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoPageModule) },
  {
    path: 'mis-reservas',
    loadChildren: () => import('./mis-reservas/mis-reservas.module').then(m => m.MisReservasPageModule),
    canActivate: [ReservaGuard]
  },
  {
    path: 'confirmar-arriendo',
    loadChildren: () => import('./confirmar-arriendo/confirmar-arriendo.module').then(m => m.ConfirmarArriendoPageModule),
    canActivate: [ReservaGuard]
  },
  { path: 'gracias', loadChildren: () => import('./gracias/gracias.module').then(m => m.GraciasPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
