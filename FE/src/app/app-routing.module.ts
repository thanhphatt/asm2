import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { HeaderComponent } from './admin/header/header.component';
import { LoginComponent } from './login/login.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { TaskComponent } from './admin/task/list-task/task.component';
import { projectsComponent } from './admin/project/list-project/project.component';

// import { AddTaskComponent } from './admin/add-task/add-task.component';
import { AddTaskComponent } from './admin/task/add-task/add-task.component';
// import { AddProjectComponent } from './admin/add-project/add-project.component';
import { AddProjectComponent } from './admin/project/add-project/add-project.component';
// import { ProjectDetailsComponent } from './project-detail/project-detail.component';
import { ProjectDetailsComponent } from './admin/project/project-detail/project-detail.component';
// import { UsersComponent } from './admin/users/users.component';
import { UsersComponent } from './admin/User/user.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailComponent } from './admin/User/user-detail/user-detail.component';
// import { AddUserComponent } from './add-user/add-user.component';
import { AddUserComponent } from './admin/User/add-user/add-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HeaderComponent },
  { path: 'task', component: TaskComponent },
  { path: 'project', component: projectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'add-user', component: AddUserComponent },

  { path: 'project/:id', component: ProjectDetailsComponent },

  { path: 'user', component: UsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'tasks/:id', component: EditTaskComponent },
  { path: 'projects/:id', component: EditProjectComponent },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
