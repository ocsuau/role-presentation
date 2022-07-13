import React from 'react';

import employees, { Employee } from './employees';

import Card from './components/Card/Component';

import './App.css';

const getEmployeeCards = () =>
  employees.map(getEmployeeCard);

const getEmployeeCard =
  (employee: Employee) =>
    (<Card
      key={employee.id}
      title={employee.name}
      imageSrc={employee.imageUrl}
      subtitle={employee.role}
      longText={employee.longDescription}
      classNames="employee-card" />);

const App = () =>
  (<div id="app">
    <span className="main-title">Roles</span>
    <div id="content">
      { getEmployeeCards() }
    </div>
  </div>);

export default App;
