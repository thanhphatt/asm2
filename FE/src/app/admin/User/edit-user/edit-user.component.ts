import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/user.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { IUsers } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = true;
  userId: string;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  
    this.editUserForm = this.fb.group({
      _id: [''],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      team: [''],
      created_at: ['', Validators.required] // Ensure form control names match with those in the template
    });
  
    if (this.userId) {
      this.loadUserData(this.userId);
    } else {
      this.isLoading = false;
    }
  }
  
  loadUserData(id: string) {
    this.userService.getUserById(id).subscribe(
      (user: IUsers) => {
        this.editUserForm.patchValue(user); // Patch the form with user data
        this.isLoading = false;
      },
      (error) => {
        console.error('Error retrieving user:', error);
        this.errorMessage = 'Error retrieving user. Please try again later.';
        this.isLoading = false;
      }
    );
  }
  

  onSubmit() {
    if (this.editUserForm.valid) {
      const userData = this.editUserForm.value;
  
      this.userService.updateUser(userData).subscribe(
        (response) => {
          console.log('User updated successfully!', response);
          this.router.navigate(['/users']); // Navigate to user list or another appropriate page
        },
        (error) => {
          console.error('Error updating user:', error);
          this.errorMessage = 'Error updating user. Please try again later.';
        }
      );
    } else {
      console.warn('Form is invalid', this.editUserForm);
      this.editUserForm.markAsTouched(); // Mark all fields as touched to trigger validation messages
    }
  }
  

  onBack() {
    this.location.back();
  }
}
