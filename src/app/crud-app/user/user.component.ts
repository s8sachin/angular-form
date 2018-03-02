import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './user';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  users: User[];
  @Input() user: User;
  @Output() userToBeDeleted = new EventEmitter<User>();

  constructor (private userService: UserService) {}

  ngOnInit () {

    this.userService.users.subscribe((users) => this.users = users);
  }

  destroy () {

    this.userToBeDeleted.emit(this.user);
  }

  toggleEdit () {

    this.users.forEach((u) =>{

      u.edit = false;
    });
    this.user.edit = true;
  }
}
