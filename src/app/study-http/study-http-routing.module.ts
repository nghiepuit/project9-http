import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
// Component
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/users', pathMatch: 'full'},
	{ path: '', component: UserListComponent },
	{ path: 'users', component: UserListComponent },
  { path: 'user/add', component: AddEditUserComponent },
  { path: 'user/:id/edit', component: AddEditUserComponent },
  { path: 'user/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudyHttpRoutingModule {}