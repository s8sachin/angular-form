import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user/user';
import {UserService} from '../user-service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];

  constructor (private userService: UserService) {}

  ngOnInit () {

    this.userService.users.subscribe((users) => this.users = users);
  }

  deleteUser (user) {

    const index = this.users.indexOf(user);

    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
}
