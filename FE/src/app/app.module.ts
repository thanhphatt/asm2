import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { FooterComponent } from './admin/footer/footer.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { projectsComponent } from './admin/project/list-project/project.component';
import { TaskComponent } from './admin/task/list-task/task.component';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './admin/task/add-task/add-task.component';

import { AddProjectComponent } from './admin/project/add-project/add-project.component';
import { HttpClientModule } from '@angular/common/http';  // Nhập HttpClientModule
import { ProjectService } from './admin/services/project.service';
import { TaskService } from './admin/services/task.service';
import { UsersService } from './admin/services/user.service';
// import { ProjectDetailsComponent } from './project-detail/project-detail.component';
import { ProjectDetailsComponent } from './admin/project/project-detail/project-detail.component';
// import { UsersComponent } from './admin/users/users.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';
// import { AddUserComponent } from './add-user/add-user.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

import { UsersComponent } from './admin/User/user.component';
import { UserDetailComponent } from './admin/User/user-detail/user-detail.component';
import { AddUserComponent } from './admin/User/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './admin/User/edit-user/edit-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DashboardComponent,
    projectsComponent,
    TaskComponent,
    LoginComponent,
    AddTaskComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    UserDetailComponent,
    UsersComponent,
    AddUserComponent,
    // Updatedupstream,
    UserDetailComponent,
    AddUserComponent,
    EditTaskComponent,
    EditProjectComponent,
    EditUserComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,// Add FormsModule here
    HttpClientModule,
    ReactiveFormsModule   // Nhập khẩu HttpClientModule ở đây
  ],
  providers: [ProjectService, TaskService, UsersService],
  bootstrap: [AppComponent]

})
export class AppModule { }