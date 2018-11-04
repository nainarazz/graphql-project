import React, { Component } from 'react';
import { Table, Button, Grid } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import ModalInput from './ModalInput';
import { getEmployeesQuery } from '../queries/queries';

class EmployeeList extends Component {
  state = {
    showModal: false
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

  displayEmployees() {
    const data = this.props.data;
    const employees = data.employees;

    if (data.loading) {
      return 'Loading list of employees ...';
    }

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

export default graphql(getEmployeesQuery)(EmployeeList);
