import React, { Component } from 'react';
import {
  Table, Button, Grid,
} from 'react-bootstrap';

const data = [
  {
    id: 1, nom: 'razafindrabiby ', prenom: 'naina', age: 23, poste: 'software dev',
  },
  {
    id: 2, nom: 'razafindrabiby ', prenom: 'anitha', age: 22, poste: 'student',
  },
  {
    id: 3, nom: 'razafindrabiby ', prenom: 'nem', age: 13, poste: 'student',
  },
];

class EmployeeList extends Component {
  static displayEmployees() {
    // will be changed later to data from db
    const employees = data;

    const list = employees.map(emp => (
      <tr key={emp.id}>
        <td>{emp.nom} {emp.prenom}</td>
        <td>
          <i className="glyphicon glyphicon-pencil" />
          <i className="glyphicon glyphicon-trash" />
        </td>
      </tr>
    ));

    return (
      <div>
        <Grid>
          <Button bsStyle="primary">Add Employee</Button>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Employees</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </Table>
        </Grid>
      </div>
    );
  }

  render() {
    return (
      <div>
        {EmployeeList.displayEmployees()}
      </div>
    );
  }
}

export default EmployeeList;
