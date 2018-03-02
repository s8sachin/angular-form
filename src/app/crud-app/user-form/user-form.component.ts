import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user/user';
import {UserService} from '../user-service/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  isEdit: boolean;
  users: User[];
  userClone: User;
  @Input() user: User = new User();
  @Output() dismissForm = new EventEmitter();

  constructor (private userService: UserService) {}

  ngOnInit () {

    this.isEdit = !!this.user.id;
    this.userService.users.subscribe((users) => this.users = users);
  }

  cancel () {

    this.dismissForm.emit();
    this.user.edit = false;
  }

  addOrUpdateUser () {

    this.userService.addUser(this.user);
    this.user = new User();
    this.cancel();
  }
}
