import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Routing
import { StudyHttpRoutingModule } from './study-http-routing.module';
// Component
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
// Service
import { UserService } from './services/user.service';
// SharedModule
import { SharedModule } from './../shared/shared.module';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';

@NgModule({
  declarations: [
	UserListComponent,
	UserDetailComponent,
	AddEditUserComponent
  ],
  imports: [
    SharedModule,
    HttpModule,
    StudyHttpRoutingModule
  ],
  providers: [UserService],
  bootstrap: []
})
export class StudyHttpModule { }
