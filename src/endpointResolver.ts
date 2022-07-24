import feature from './helpers/featureToggle';
import EmployeeEndpoints from './modules/employee/api';

const loadEndpoints = () => {
  return feature('http-source')
    ? { employee: new EmployeeEndpoints.Http() }
    : { employee: new EmployeeEndpoints.Fake() }
};

export default loadEndpoints;