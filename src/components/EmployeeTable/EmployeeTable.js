import React, { useState } from "react";
import { Table, Button, Input } from "reactstrap";

const EmployeeTable = props => {
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState();

  const editEmployee = () => {};

  if (props.employees.length === 0) {
    return <p>There are no employess on the list</p>;
  } else {
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((ele, key) => {
            return !editMode ? (
              <tr key={key}>
                <th scope="row">{ele.name}</th>
                <td>{ele.email}</td>
                <td>
                  <Button
                    color={"danger"}
                    className="mx-2"
                    onClick={() => setEditMode(!editMode)}
                  >
                    Edit
                  </Button>
                  <Button
                    color={"danger"}
                    onClick={() => props.deleteEmployee(ele.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ) : (
              <tr key={key}>
                <th scope="row">
                  <Input type="text" name="name" value={ele.name} />
                </th>
                <td>
                  <Input type="text" name="name" value={ele.email} />
                </td>
                <td>
                  <Button
                    color={"danger"}
                    className="mx-2"
                    onClick={() => props.editEmployee(ele)}
                  >
                    Save
                  </Button>
                  <Button
                    color={"danger"}
                    onClick={() => setEditMode(!editMode)}
                  >
                    Cancel
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
};

export default EmployeeTable;
