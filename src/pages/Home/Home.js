import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

/** Components imports */
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";

const HomePage = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Jairo", email: "jairomgr@gmail.com" },
    { id: 2, name: "Paula", email: "maripau86@gmail.com" }
  ]);

  const addEmployee = employee => {
    const id =
      employees.length > 0 ? employees[employees.length - 1].id + 1 : 0;
    const newEmployee = { ...employee, id };

    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = id => {
    const newList = employees.filter(ele => {
      return id !== ele.id;
    });

    setEmployees(newList);
  };

  const editEmployee = employee => {
    console.log(employee);
  };

  return (
    <Container className="h-100">
      <Row>
        <Col>
          <EmployeeForm addEmployee={addEmployee} />
          <EmployeeTable
            employees={employees}
            deleteEmployee={deleteEmployee}
            editEmployee={editEmployee}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
