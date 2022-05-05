import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [departments, setDepartments] = useState<any>([]);

  useEffect(() => {

    const loadDepartments = async () => {
      const res = await fetch('http://localhost:4000/departments');
      const departments = await res.json();
      console.log(departments);
      setDepartments(departments);
    }

    loadDepartments();

  }, [])

  return (
    <>
      <h1>Departments</h1>
      <>
        {departments.map((department: any) =>
          <React.Fragment key={department._id}>
            <h2>{department.name}</h2>
            <ul>
              {department.employees.map((employee: any) => <li key={employee._id}>{employee.firstname}</li>)}
            </ul>
          </React.Fragment>
        )}
      </>
    </>
  )
}

export default App;
