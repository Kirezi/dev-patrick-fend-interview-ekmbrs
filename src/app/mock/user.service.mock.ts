import { Observable } from 'rxjs';
import { User } from '../user/user';

export class UserServiceMock {
  user: Observable<User[]>;
  getUsers$(): Observable<any> {
    return this.user;
  }
}
