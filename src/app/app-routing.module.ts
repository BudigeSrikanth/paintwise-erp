import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'clients', loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule) },
  { path: 'workers', loadChildren: () => import('./modules/workers/workers.module').then(m => m.WorkersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
