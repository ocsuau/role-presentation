import { delay, EMPTY, from, mergeMap, Observable, of } from "rxjs";

import { Employee, Endpoint } from "../../types";

import fakeEmployees from './employees.json';

export default class Fake implements Endpoint {
  public getAll(): Observable<Employee> {
    return from(fakeEmployees)
      .pipe(
        mergeMap((employee, index) => of(employee).pipe(delay((index + 2) * 1000)))
      );
  }

}