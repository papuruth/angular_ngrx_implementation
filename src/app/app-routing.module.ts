import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { JobsComponent } from './components/jobs/jobs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: JobsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UsersDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}