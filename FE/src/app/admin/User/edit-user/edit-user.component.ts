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
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
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
          this.user = data;
          console.log('User assigned:', this.user);
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
    console.log('Updating user:', this.user);
    
    let userId: string | undefined;

    // Kiểm tra nếu _id là một đối tượng chứa $oid
    if (this.user._id && typeof this.user._id === 'object' && '$oid' in this.user._id) {
      userId = this.user._id.$oid;
    } 
    // Kiểm tra nếu _id là một chuỗi
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
      console.error('User ID is undefined or user is not properly initialized, cannot update user.');
    }
  }
  

  onBack() {
    this.location.back();
  }
}
