import React, { useEffect, useState } from 'react';

import employeeService from './modules/employee/service';

import { Employee } from './modules/employee/types';

import Card from './components/Card/Component';

import './App.css';


const App = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    employeeService
      .getAll()
      .subscribe({
        next: insertEmployee,
        complete: () => console.log('Completed')
      });
  }, []);

  const insertEmployee =
    (providedEmployee: Employee) =>
      setEmployees((currentEmployees) =>
        [...currentEmployees, providedEmployee]);

  const getEmployeeCards = () =>
    employees.map(getEmployeeCard);

  const getEmployeeCard =
    (employee: Employee) =>
      (<Card
        key={employee.id}
        title={employee.name}
        imageSrc={employee.imageUrl}
        subtitle={employee.role}
        longText={employee.address}
        classNames="employee-card" />);
  
  return (
    <div id="app">
      <span className="main-title">Roles</span>
      {!employees.length && <span>Loading...</span>}
      {
        !!employees.length
        && <div id="content">
            { getEmployeeCards() }
          </div>
      }
    </div>
  )
};

export default App;
