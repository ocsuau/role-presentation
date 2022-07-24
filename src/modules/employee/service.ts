import { Observable } from 'rxjs';

import loadEndpoints from '../../endpointResolver';

import { Employee } from './types';

const endpoint = loadEndpoints().employee;

const getAll =
  (): Observable<Employee> =>
    endpoint.getAll();

export default { getAll };