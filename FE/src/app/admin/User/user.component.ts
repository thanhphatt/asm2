import { Component, OnInit } from '@angular/core';
// 
import { IUser } from '../entities/user';// Đảm bảo đường dẫn đúng
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllusers();
  }

  getAllusers() {
    this.userService.getAllUsers().subscribe(
      data => {
        console.log('Data received:', data); // Debugging line
        this.users = data;
      },
      error => console.error('Lỗi :', error)
    );
  }
  viewUserDetail(id: string) {
    this.router.navigate(['/user', id]);
  }
  deleteUser(id: string) {

  // Hỏi người dùng có chắc chắn muốn xóa không
  const confirmation = confirm('Bạn có chắc chắn muốn xóa người dùng này không?');
  
  // Nếu người dùng chọn "OK", tiếp tục xóa
  if (confirmation) {
    this.userService.deleteUser(id).subscribe(
      response => {
        console.log('User deleted:', response); // Debugging line
        // Cập nhật danh sách người dùng sau khi xóa
        this.users = this.users.filter(user => user._id.$oid !== id);
        // Load lại trang
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/user']);
        });
      },
      error => console.error('Lỗi khi xóa người dùng:', error)
    );
  } else {
    // Nếu người dùng chọn "Cancel", không làm gì cả
    console.log('Hủy xóa người dùng');
  }
}
  
}