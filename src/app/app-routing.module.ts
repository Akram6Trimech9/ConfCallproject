import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './Components/join/join.component';
import { MainAppComponent } from './Components/main-app/main-app.component';
import { ReloadingPageComponent } from './Components/reloading-page/reloading-page.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path:'reload',component:ReloadingPageComponent},
{path:'signin', component:SigninComponent},
{path:'signup',component:SignupComponent},
{path:'join',component:JoinComponent},
{path:'main',component:MainAppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
