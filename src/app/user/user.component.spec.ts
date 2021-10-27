import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { tick } from '@angular/core/testing';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
  fakeAsync,
} from '@angular/core/testing';
import { of } from 'rxjs';
import { UserServiceMock } from '../mock/user.service.mock';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  //const usersJson = '/assets/users.json';
  const users = [
    {
      id: 'u_8nB75i9',
      name: 'John Placeholder',
      email: 'john.placeholder@fakemail.com',
      created_at: '2021-03-16T19:38:45.850Z',
      confirmed: true,
    },
    {
      id: 'u_5bB95j0',
      name: 'Mary Placeholder',
      email: 'mary.placeholder@fakemail.com',
      created_at: '2021-04-16T19:38:45.850Z',
      confirmed: true,
    },
    {
      id: 'u_9bB95j0',
      name: 'Fred Placeholder',
      email: 'fred.placeholder@fakemail.com',
      created_at: '2021-05-16T19:38:45.850Z',
      confirmed: true,
    },
    {
      id: 'u_00B95z0',
      name: 'Matt Placeholder',
      email: 'matt.placeholder@fakemail.com',
      created_at: '2021-06-16T19:38:45.850Z',
    },
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [UserComponent],
        providers: [{ provide: UserService, useClass: UserServiceMock }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get users', fakeAsync(() => {
    const spy_getUsers = spyOn(userService, 'getUsers$').and.returnValue(
      of(users)
    );
    component.getUsers();
    tick();
    expect(spy_getUsers).toHaveBeenCalled();
    expect(component.users.length).toBe(4);
  }));
});
