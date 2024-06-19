import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
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
    private userService: UserService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.addUserForm = this.fb.group({
<<<<<<< Updated upstream
      username: ['', [Validators.required, Validators.minLength(2)]],
=======
      username: ['', Validators.required],
>>>>>>> Stashed changes
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      team: [''],
      created_at: ['', Validators.required],
      image: [null] // Initialize image control
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('Form Value:', this.addUserForm.value);
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
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin!';
    } 
  }

  onBack(): void {
    this.location.back();
  }

  // Getter để truy xuất các FormControl
  get username() { return this.addUserForm.get('username'); }
  get email() { return this.addUserForm.get('email'); }
  get role() { return this.addUserForm.get('role'); }
  get team() { return this.addUserForm.get('team'); }
  get created_at() { return this.addUserForm.get('created_at'); }

  // Xử lý sự kiện khi người dùng chọn file hình ảnh
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.addUserForm.patchValue({
        image: file
      });
    }
  }
}
