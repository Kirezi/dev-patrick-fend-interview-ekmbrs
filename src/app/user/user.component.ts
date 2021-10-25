import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {}

  // Allow getUsers() to populate the users variable, and makes them available to the view.
  getUsers(): void {
    // call this.userService.getUsers$() to populate the users variable.
    this.userService
      .getUsers$()
      .pipe(filter((users) => !!users))
      .subscribe((users) => (this.users = users));
  }
}
