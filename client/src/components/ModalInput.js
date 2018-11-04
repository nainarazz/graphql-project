import React, { Component } from 'react';
import {
    Modal,
    Button,
    FormControl,
    FormGroup,
    ControlLabel,
    Col,
    Form
} from 'react-bootstrap';
// import EmployeeForm from './EmplooyeeForm';

class CustomModal extends Component {
    state = {
        nom: '',
        prenom: '',
        age: '',
        poste: '',
        titre: '',
        description: ''
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log("state ", this.state);
        this.props.onHide();
        // this.setState({ nom: e.})
    }

    handleSave = () => {
        console.log("saved");
        this.setState({ showModal: false });
      }

    employeeForm = (
        <Form horizontal>
            <FormGroup controlId="formHorizontalNom">
                <Col componentClass={ControlLabel} sm={2}>
                    Nom
                </Col>
    
                <Col sm={10}>
                    <FormControl type="text" placeholder="Nom" onChange={(e) => this.setState({nom: e.target.value})} />
                </Col>
            </FormGroup>
    
            <FormGroup controlId="formHorizontalPrenom">
                <Col componentClass={ControlLabel} sm={2}>
                    Prenom
                </Col>
                
                <Col sm={10}>
                    <FormControl type="text" placeholder="Prenom" onChange={(e) => this.setState({prenom: e.target.value})} />
                </Col>
            </FormGroup>
            
            <FormGroup controlId="formHorizontalAge">
                <Col componentClass={ControlLabel} sm={2}>
                    Age
                </Col>
                
                <Col sm={10}>
                    <FormControl type="text" placeholder="Age" onChange={(e) => this.setState({age: e.target.value})} />
                </Col>
            </FormGroup>
            
            <FormGroup controlId="formHorizontalPoste">
                <Col componentClass={ControlLabel} sm={2}>
                    Poste
                </Col>
                
                <Col sm={10}>
                    <FormControl type="text" placeholder="Poste" onChange={(e) => this.setState({poste: e.target.value})} />
                </Col>
            </FormGroup>
            
            <FormGroup controlId="formHorizontalTitre">
                <Col componentClass={ControlLabel} sm={2}>
                    Titre
                </Col>
                
                <Col sm={10}>
                    <FormControl type="text" placeholder="Titre" onChange={(e) => this.setState({titre: e.target.value})} />
                </Col>
            </FormGroup>
            
            <FormGroup controlId="formHorizontalDescription">
                <Col componentClass={ControlLabel} sm={2}>
                    Description
                </Col>
                
                <Col sm={10}>
                    <FormControl componentClass="textarea" placeholder="Description" onChange={(e) => this.setState({description: e.target.value})} />
                </Col>
            </FormGroup>
        </Form>
    );

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Employee Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.employeeForm}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.submitForm}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CustomModal;