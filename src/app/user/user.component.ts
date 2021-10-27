import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, take, takeUntil, tap } from 'rxjs/operators';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  users: User[];
  destroy$ = new Subject();

  constructor(private userService: UserService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next();
  }

  // Allow getUsers() to populate the users variable, and makes them available to the view.
  getUsers(): void {
    // call this.userService.getUsers$() to populate the users variable.
    this.userService
      .getUsers$()
      .pipe(
        filter((users) => !!users),
        takeUntil(this.destroy$)
      )
      .subscribe((users) => (this.users = users));
  }
}
