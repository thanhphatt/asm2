import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { FooterComponent } from './admin/footer/footer.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { projectsComponent } from './admin/project/list-project/project.component';
import { TaskComponent } from './admin/task/list-task/task.component';
import { LoginComponent } from './login/login.component';
<<<<<<< Updated upstream
// import { AddTaskComponent } from './admin/task/add-task/add-task.component';

import { AddProjectComponent } from './admin/project/add-project/add-project.component';
import { HttpClientModule } from '@angular/common/http';  // Nhập HttpClientModule
import { ProjectService } from './admin/services/project.service';
import { TaskService } from './admin/services/task.service';
// import { UsersService } from './admin/services/user.service';
import { UserService } from './admin/services/user.service';
// import { ProjectDetailsComponent } from './project-detail/project-detail.component';
import { ProjectDetailsComponent } from './admin/project/project-detail/project-detail.component';
// import { UsersComponent } from './admin/users/users.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';
// import { AddUserComponent } from './add-user/add-user.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
=======
import { AddTaskComponent } from './admin/Task/add-task/add-task.component';
import { AddProjectComponent } from './admin/Project/add-project/add-project.component';
import { ProjectDetailsComponent } from './admin/Project/project-detail/project-detail.component';
>>>>>>> Stashed changes

import { UsersComponent } from './admin/User/user.component';
import { UserDetailComponent } from './admin/User/user-detail/user-detail.component';
import { AddUserComponent } from './admin/User/add-user/add-user.component';
<<<<<<< Updated upstream
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './admin/User/edit-user/edit-user.component';
import { AddTaskComponent } from './admin/task/add-task/add-task.component';
=======
import { EditUserComponent } from './admin/User/edit-user/edit-user.component';

import { ProjectService } from './admin/services/project.service';
import { TaskService } from './admin/services/task.service';
import { UsersService } from './admin/services/user.service';

>>>>>>> Stashed changes
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
    // AddTaskComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    UsersComponent,
    UserDetailComponent,
    AddUserComponent,
<<<<<<< Updated upstream
    // Updatedupstream,
    UserDetailComponent,
    AddUserComponent,
    EditTaskComponent,
    EditProjectComponent,
    EditUserComponent,
    AddTaskComponent
   
=======
    EditUserComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< Updated upstream
    AppRoutingModule,// Add FormsModule here
    HttpClientModule,
    ReactiveFormsModule   // Nhập khẩu HttpClientModule ở đây
=======
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
>>>>>>> Stashed changes
  ],
  providers: [ProjectService, TaskService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
