import { Component, OnInit } from '@angular/core';
import { IUser } from '../../entities/user';// Đảm bảo đường dẫn đúng
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// import { UsersService } from '../../services/user.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser;

  constructor(private route: ActivatedRoute, private projectService: UserService, private location: Location) { }

  ngOnInit() {
    // Lấy ID từ thanh địa chỉ (URL)
    const id = this.route.snapshot.paramMap.get('id');
    this.getUserDetail(id);
  }

  getUserDetail(id: string) {
    this.projectService.getUserById(id).subscribe(
      data => {
        this.user = data;
      },
<<<<<<< Updated upstream
      error => console.error('Lỗi khi lấy chi tiết:', error)
=======
      error => console.error('Lỗi khi lấy chi tiết người dùng:', error)
>>>>>>> Stashed changes
    );
  }
  onBack(): void {
    this.location.back();
  }
}
