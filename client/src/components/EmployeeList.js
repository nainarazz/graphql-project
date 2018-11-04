import React, { Component } from 'react';
import {
  Table, Button, Grid,
} from 'react-bootstrap';
import ModalInput from './ModalInput';

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
  state = {
    showModal: false
  }

  handleClose = () => {
    console.log("close");
    this.setState({ showModal: false });
  }

  handleShow = () => {
    console.log("clicked");
    this.setState({ showModal: true });
  }

  displayEmployees() {
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
          <Button bsStyle="primary" onClick={this.handleShow}>Add Employee</Button>
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
        {this.displayEmployees()}
        <ModalInput show={this.state.showModal} onHide={this.handleClose} />
      </div>
    );
  }
}

export default EmployeeList;
