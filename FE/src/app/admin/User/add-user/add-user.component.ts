import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.addUserForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      team: [''],
      image: [''],
      created_at: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('Form Value:', this.addUserForm.value); // In ra giá trị form
      this.userService.createUser(this.addUserForm.value).subscribe(
        response => {
          this.router.navigate(['/user']);
        },
        error => {
          this.errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
          console.error('Error:', error);
        }
      );
    } else {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin !'
    } 

  }
  
  onBack(): void {
    this.location.back();
  }

  // Helper method to get the control
  get username() { return this.addUserForm.get('username'); }
  get password() { return this.addUserForm.get('password'); }
  get email() { return this.addUserForm.get('email'); }
  get role() { return this.addUserForm.get('role'); }
  get created_at() { return this.addUserForm.get('created_at'); }
}
