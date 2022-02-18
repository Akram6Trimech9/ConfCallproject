import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReloadingPageComponent } from './Components/reloading-page/reloading-page.component';
import { MainAppComponent } from './Components/main-app/main-app.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { JoinComponent } from './Components/join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    ReloadingPageComponent,
    MainAppComponent,
    SigninComponent,
    SignupComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
