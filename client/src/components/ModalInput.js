import React, { Component } from 'react';
import {
    Modal,
    Button,
} from 'react-bootstrap';
import EmployeeForm from './EmplooyeeForm';

class CustomModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Employee Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {EmployeeForm}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CustomModal;