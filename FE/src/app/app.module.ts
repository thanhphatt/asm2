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
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { HttpClientModule } from '@angular/common/http';  // Nhập HttpClientModule
import { ProjectService } from './admin/services/project.service';
import { TaskService } from './admin/services/task.service';
import { UsersService } from './admin/services/user.service';
import { ProjectDetailsComponent } from './project-detail/project-detail.component';
import { UsersComponent } from './admin/users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

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
    AddEmployeeComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    UsersComponent,
    UserDetailComponent
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule ,// Add FormsModule here
    HttpClientModule  // Nhập khẩu HttpClientModule ở đây
  ],
  providers: [ProjectService,TaskService,UsersService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }