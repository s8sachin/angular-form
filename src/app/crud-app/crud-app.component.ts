import { Component, OnInit } from '@angular/core';
import { User } from './user/user';
import { UserService } from './user-service/user.service';

@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.scss']
})
export class CrudAppComponent implements OnInit {

  user: User;
  users: User[];
  showForm: boolean;

  constructor (private userService: UserService) {}

  ngOnInit() {

    this.showForm = false;
    this.userService.users.subscribe((users) => this.users = users);
  }

  toggleAddUserForm () {

    this.showForm = !this.showForm;
  }
}
