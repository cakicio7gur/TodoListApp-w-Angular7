import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './components/login/login.guard';

const routes: Routes = [
  {path:'', redirectTo:'homepage',pathMatch:"full"},
  {path:'home', component:HomeComponent,canActivate:[LoginGuard]},
  {path:'about', component:AboutComponent},
  {path:'notfound', component:NotFoundComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
