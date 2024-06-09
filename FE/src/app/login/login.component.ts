import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Đoạn mã xử lý khi người dùng nhấn nút Đăng nhập
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Thêm logic xác thực ở đây (ví dụ: gọi API đăng nhập)
  }
}
