import React, { Component } from 'react';
import {
    Modal,
    Button,
} from 'react-bootstrap';

import { graphql, compose } from 'react-apollo';
import { 
    deleteEmployeeMutation, 
    deleteExperienceMutation, 
} from '../queries/queries';

class ConfirmationDialog extends Component {
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
                        <Button onClick={this.submitForm}>Delete</Button>
                        <Button onClick={this.submitForm}>Cancel</Button>
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