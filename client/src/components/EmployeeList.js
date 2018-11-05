import React, { Component } from 'react';
import { Table, Button, Grid } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import ModalInput from './ModalInput';
import ConfirmationDialog from './ConfirmationDialog';
import { getEmployeesQuery } from '../queries/queries';

class EmployeeList extends Component {
  state = {
    showModal: false,
    modalEdit: false,
    modalDelete: false, 
    data: null
  }

  closeModal = () => {
    this.setState({ showModal: false, modalDelete: false, modalEdit: false });
  }
 
  handleShow = () => {
    this.setState({ showModal: true, data: null, modalEdit: true });
  }

  handleEditEmployee = (emp) => {
    this.setState({ data: emp, showModal: true, modalEdit: true });
  }

  handleDeleteEmployee = (emp) => {
    this.setState({ data: emp, showModal: true, modalDelete: true });
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
          <i className="glyphicon glyphicon-trash" onClick={ () => this.handleDeleteEmployee(emp) }/>
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
        <ModalInput data={this.state.data} show={this.state.showModal && this.state.modalEdit} onHide={this.closeModal} />
        <ConfirmationDialog data={this.state.data} show={this.state.showModal && this.state.modalDelete} onHide={this.closeModal} message={"Do you really want to delete this employee?"}/>
      </div>
    );
  }
}

export default graphql(getEmployeesQuery, { name: 'getEmployeesQuery'})(EmployeeList);
