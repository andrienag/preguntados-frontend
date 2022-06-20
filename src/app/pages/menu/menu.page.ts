import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class MenuPage implements OnInit {
  userData;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.getUser();
  }
}
