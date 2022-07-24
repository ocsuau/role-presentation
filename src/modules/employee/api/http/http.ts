import { delay, mergeMap, Observable, of, repeat } from "rxjs";
import { ajax } from 'rxjs/ajax';

import { toEmployee } from "../../helpers";

import { Employee, Endpoint } from "../../types";

const convertToEmployee = (user: RandomApiUser): Employee => 
  toEmployee(
    user.id,
    `${user.first_name} ${user.last_name}`,
    user.employment.title,
    `${user.address.city}, ${user.address.state}, ${user.address.country}`,
    user.avatar
  );

export default class http implements Endpoint {
    public getAll(): Observable<Employee> {
      return ajax<RandomApiUser>('https://random-data-api.com/api/users/random_user')
        .pipe(
          repeat(5),
          mergeMap((user, index) =>
            of(convertToEmployee(user.response))
              .pipe(delay((index + 2) * 1000))));
    }
}


