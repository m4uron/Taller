import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [{ path: '', component: LandingComponent},
{ path: 'landing', component: LandingComponent},
{ path: 'adminLanding', component: AdminLandingComponent},
{ path: 'login', component: LoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
