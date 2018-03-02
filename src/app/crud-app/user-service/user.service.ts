import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../user/user';
import * as _ from 'lodash';

@Injectable()
export class UserService {

  private userSource = new BehaviorSubject<User[]>([]);
  users = this.userSource.asObservable();

  constructor() { }

  changeUsers(users: User[]) {
    this.userSource.next(users);
  }

  addUser (user) {

    if (user.id) {

      _.remove(this.userSource.value, (u) => {
        return u.id === user.id;
      });
    } else {

      user.addIdBeforeSave();
    }
    this.userSource.value.unshift(user);

    this.changeUsers(this.userSource.value);
  }
}
