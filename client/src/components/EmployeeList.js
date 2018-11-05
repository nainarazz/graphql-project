import React, { Component } from 'react';
import { Table, Button, Grid } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import ModalInput from './ModalInput';
import { getEmployeesQuery } from '../queries/queries';

class EmployeeList extends Component {
  state = {
    showModal: false,
    data: null
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }
 
  handleShow = () => {
    this.setState({ showModal: true, data: null });
  }

  handleEditEmployee = (emp) => {
    this.setState({ data: emp, showModal: true });
  }

  displayEmployees() {
    const data = this.props.getEmployeesQuery;

    if (data.loading) {
      return 'Loading list of employees ...';
    }

    const employees = data.employees;
    
    const list = employees.map(emp => (
      <tr key={emp.id} >
        <td>{emp.nom} {emp.prenom}</td>
        <td>
          <i className="glyphicon glyphicon-pencil" onClick={ () => this.handleEditEmployee(emp) } />
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
        <ModalInput data={this.state.data} show={this.state.showModal} onHide={this.closeModal} />
      </div>
    );
  }
}

export default graphql(getEmployeesQuery, { name: 'getEmployeesQuery'})(EmployeeList);
