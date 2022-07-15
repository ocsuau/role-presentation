import { Observable } from 'rxjs';
import employees, { Employee } from './employees';

const getAll =
  (): Observable<Employee> =>
    new Observable(subscriber => {
      employees.forEach((employee, index) => {
        const delayInMilliseconds = (index + 1) * 1500;

        setTimeout(
          () => subscriber.next(employee),
          delayInMilliseconds);
      })
    });

export default { getAll }