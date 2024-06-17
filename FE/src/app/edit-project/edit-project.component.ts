import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../admin/services/project.service';
import { IProject } from '../admin/entities/project';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: IProject = {
    _id: { $oid: '' },
    name: '',
    description: '',
    leader_id: '',
    team: '',
    start_date: '',
    end_date: '',
    budget: '',
    status: '',
    created_at: '',
    updated_at: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProject(id);
    } else {
      console.error('Project ID is not provided in the route.');
    }
  }

  getProject(id: string): void {
    this.projectService.getProjectById(id).subscribe(
      (data: IProject) => {
        if (data) {
          this.project = data;
          console.log('Project assigned:', this.project);
        } else {
          console.error('API response does not contain project data');
        }
      },
      error => {
        console.error('Error fetching project:', error);
      }
    );
  }

  updateProject(): void {
    console.log('Updating project:', this.project);
    
    let projectId: string | undefined;

    // Kiểm tra nếu _id là một đối tượng chứa $oid
    if (this.project._id && typeof this.project._id === 'object' && '$oid' in this.project._id) {
      projectId = this.project._id.$oid;
    } 
    // Kiểm tra nếu _id là một chuỗi
    else if (typeof this.project._id === 'string') {
      projectId = this.project._id;
    }

    if (projectId) {
      this.projectService.updateProject(projectId, this.project).subscribe(
        response => {
          console.log('Project updated:', response);
          this.router.navigate(['/project']);
        },
        error => {
          console.error('Error updating project:', error);
        }
      );
    } else {
      console.error('Project ID is undefined or project is not properly initialized, cannot update project.');
    }
  }
}
