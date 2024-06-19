import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/user.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { IUsers } from '../../services/user.service';
=======
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/user.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
<<<<<<< Updated upstream
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
=======
  // editUserForm: FormGroup;
  // userId: string;
  // errorMessage: string;

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    // private formBuilder: FormBuilder,
    // private userService: UsersService
  ) { }

  ngOnInit(): void {
    // this.editUserForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   role: ['', Validators.required],
    //   team: ['', Validators.required],
    //   created_at: ['', Validators.required]
    // });

    // const id = this.route.snapshot.params['id'];
    // this.userService.getUserById(id).subscribe(
    //   user => {
    //     this.userId = typeof user._id === 'string' ? user._id : user._id.$oid;
    //     this.editUserForm.patchValue({
    //       username: user.username,
    //       email: user.email,
    //       role: user.role,
    //       team: user.team,
    //       created_at: user.created_at
    //     });
    //   },
    //   error => {
    //     console.error('Error getting user:', error);
    //     this.errorMessage = 'Error loading user details';
    //   }
    // );
  }

  // onSubmit(): void {
  //   // if (this.editUserForm.valid) {
  //   //   this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(
  //   //     () => {
  //   //       console.log('User updated successfully');
  //   //       this.router.navigate(['/users']); // Navigate back to user list after successful update
  //   //     },
  //   //     error => {
  //   //       console.error('Error updating user:', error);
  //   //       this.errorMessage = 'Error updating user details';
  //   //     }
  //   //   );
  //   // }
  // }

  onBack(): void {
    this.router.navigate(['/users']); // Navigate back to user list
>>>>>>> Stashed changes
  }
}
