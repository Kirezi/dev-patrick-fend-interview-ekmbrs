import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  const usersJson = '/assets/users.json';

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [UserComponent],
        providers: [UserService],
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

  it('user list should be empty and of type user', () => {
    expect(component.users).toEqual([]);
  });

  // it('should use user list from userService', () => {
  //   expect(userService.getUsers$());
  // });

  // it('#clicked() should return list of users', () => {
  //   component.getUsers();
  //  // expect(component.users).toEqual('');
  // });
});
