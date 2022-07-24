import { EMPTY, Observable } from "rxjs";
import { Employee, Endpoint } from "../types";

export default class http implements Endpoint {
    public getAll(): Observable<Employee> {
      return EMPTY;
    }
}