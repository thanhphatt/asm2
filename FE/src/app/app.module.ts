import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { FooterComponent } from './admin/footer/footer.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { projectsComponent } from './admin/project/project.component';
import { TaskComponent } from './admin/task/task.component';
// import { LoginComponent } from './login/login.component';

import { AddTaskComponent } from './admin/add-task/add-task.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { HttpClientModule } from '@angular/common/http';  // Nhập HttpClientModule
import { ProjectService } from './admin/services/project.service';
import { TaskService } from './admin/services/task.service';
import { UsersService } from './admin/services/user.service';
import { ProjectDetailsComponent } from './project-detail/project-detail.component';
import { UsersComponent } from './admin/users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
// import{tá}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DashboardComponent,
    EmployeeComponent,
    projectsComponent,
    TaskComponent,
    LoginComponent,
    AddTaskComponent, 
    AddProjectComponent,
    ProjectDetailsComponent,
    UsersComponent,
    UserDetailComponent,
    AddUserComponent,
    EditTaskComponent,
    EditProjectComponent,
    RegisterComponent
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule ,// Add FormsModule here
    HttpClientModule , // Nhập khẩu HttpClientModule ở đây
    ReactiveFormsModule
  ],
  providers: [ProjectService,TaskService,UsersService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }