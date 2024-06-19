import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService, IUser } from '../../services/user.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

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
  user: IUser | null = null; // Initialize user as null or undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getUser(id);
    } else {
      console.error('User ID is not provided in the route.');
    }
  }

  getUser(id: string): void {
    this.userService.getUserById(id).subscribe(
      (data: IUser) => {
        if (data) {
          this.user = data; // Assign fetched user data to userId: string, user: IUsering, user: IUsering, user: IUserconsole.log('User assigned:', this.user);
        } else {
          console.error('API response does not contain user data');
        }
      },
      error => {
        console.error('Error fetching user:', error);
      }
    );
  }

  updateUser(): void {
    if (!this.user) {
      console.error('User is not properly initialized, cannot update user.');
      return;
    }

    console.log('Updating user:', this.user);
    
    let userId: string | undefined;

    // Check if _id is an object containing $oid
    if (this.user._id && typeof this.user._id === 'object' && '$oid' in this.user._id) {
      userId = this.user._id.$oid;
    } 
    // Check if _id is a string
    else if (typeof this.user._id === 'string') {
      userId = this.user._id;
    }

    if (userId) {
      this.userService.updateUser(userId, this.user).subscribe(
        response => {
          console.log('User updated:', response);
          this.router.navigate(['/user']);
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
    } else {
      console.error('User ID is undefined, cannot update user.');
    }
  }


}
