import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { IProject } from '../../entities/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class projectsComponent implements OnInit {
  projects: IProject[] = [];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.getAllProject();
  }

  getAllProject() {
    this.projectService.getAllprojects().subscribe(
      data => {
        console.log('Data received:', data); // Debugging line
        this.projects = data;
      },
      error => console.error('Lỗi khi lấy bài viết:', error)
    );
  }

  viewProjectDetail(id: string) {
    this.router.navigate(['/project', id]);
  }
  
}
