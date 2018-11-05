import React, { Component } from 'react';
import {
    Modal,
    Button,
} from 'react-bootstrap';

import { graphql, compose } from 'react-apollo';
import { 
    getEmployeesQuery,
    deleteEmployeeMutation, 
    deleteExperienceMutation, 
} from '../queries/queries';

class ConfirmationDialog extends Component {
    handleDelete = async (e) => {
        e.preventDefault();

        await this.props.deleteExperienceMutation({
            variables: {
                id: this.props.data.experienceId,
            }
        });

        await this.props.deleteEmployeeMutation({
            variables: {
                id: this.props.data.id,
            },
            refetchQueries: [{ query: getEmployeesQuery }]
        });
        
        this.props.onHide();
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.message}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleDelete}>Delete</Button>
                        <Button onClick={this.props.onHide}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            )
    }
}

export default compose(
    graphql(deleteEmployeeMutation, { name: 'deleteEmployeeMutation'}),
    graphql(deleteExperienceMutation, { name: 'deleteExperienceMutation'}),
)(ConfirmationDialog);