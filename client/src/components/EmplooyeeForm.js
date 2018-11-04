import React from 'react';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Col,
    Form,
} from 'react-bootstrap';

const employeeForm = (
    <Form horizontal>
        <FormGroup controlId="formHorizontalNom">
            <Col componentClass={ControlLabel} sm={2}>
                Nom
            </Col>

            <Col sm={10}>
                <FormControl type="text" placeholder="Nom" />
            </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPrenom">
            <Col componentClass={ControlLabel} sm={2}>
                Prenom
            </Col>
            
            <Col sm={10}>
                <FormControl type="text" placeholder="Prenom" />
            </Col>
        </FormGroup>
        
        <FormGroup controlId="formHorizontalAge">
            <Col componentClass={ControlLabel} sm={2}>
                Age
            </Col>
            
            <Col sm={10}>
                <FormControl type="text" placeholder="Age" />
            </Col>
        </FormGroup>
        
        <FormGroup controlId="formHorizontalPoste">
            <Col componentClass={ControlLabel} sm={2}>
                Poste
            </Col>
            
            <Col sm={10}>
                <FormControl type="text" placeholder="Poste" />
            </Col>
        </FormGroup>
        
        <FormGroup controlId="formHorizontalTitre">
            <Col componentClass={ControlLabel} sm={2}>
                Titre
            </Col>
            
            <Col sm={10}>
                <FormControl type="text" placeholder="Titre" />
            </Col>
        </FormGroup>
        
        <FormGroup controlId="formHorizontalDescription">
            <Col componentClass={ControlLabel} sm={2}>
                Description
            </Col>
            
            <Col sm={10}>
                <FormControl componentClass="textarea" placeholder="Description" />
            </Col>
        </FormGroup>
    </Form>
);

export default employeeForm;