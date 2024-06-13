import { Component, OnInit } from '@angular/core';
import { IUsers } from '../../entities/user';// Đảm bảo đường dẫn đúng
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUsers;

  constructor(private route: ActivatedRoute, private projectService: UsersService, private location: Location) { }

  ngOnInit() {
    // Lấy ID từ thanh địa chỉ (URL)
    const id = this.route.snapshot.paramMap.get('id');
    this.getProjectDetail(id);
  }

  getProjectDetail(id: string) {
    this.projectService.getUserById(id).subscribe(
      data => {
        this.user = data;
      },
      error => console.error('Lỗi khi lấy chi tiết:', error)
    );
  }
  onBack(): void {
    this.location.back();
  }
}
