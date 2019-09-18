import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
import { UserService } from './services/user.service';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobsService } from './services/jobs.service';
import { JobsEffects } from './store/effects/jobs.effects';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppliedJobsComponent } from './components/applied.jobs/applied.jobs.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDetailsComponent,
    JobsComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    AppliedJobsComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, JobsEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [UserService, JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
