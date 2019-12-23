import React, { useState } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({
    name: "",
    email: ""
  });

  const handleInput = e => {
    setEmployee({ ...employee, [e.currentTarget.name]: e.target.value });
  };

  return (
    <Container>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" onChange={handleInput} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" onChange={handleInput} />
          </FormGroup>
        </Col>
        <Col>
          <Button color={"success"} onClick={() => props.addEmployee(employee)}>
            Add employee
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeForm;
