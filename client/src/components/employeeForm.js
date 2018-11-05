import React from 'react';
import {
    FormControl,
    FormGroup,
    ControlLabel,
    Col,
    Form
} from 'react-bootstrap';

const form = props => {
    return (
        <div>
            <Form horizontal>
                <FormGroup controlId="formHorizontalNom">
                    <Col componentClass={ControlLabel} sm={2}>
                        Nom
                    </Col>

                    <Col sm={10}>
                        <FormControl type="text" placeholder="Nom" value={(props.data.nom)} onChange={(e) => props.changed(e, 'nom')} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPrenom">
                    <Col componentClass={ControlLabel} sm={2}>
                        Prenom
                </Col>

                    <Col sm={10}>
                        <FormControl type="text" placeholder="Prenom" value={(props.data.prenom)} onChange={(e) => props.changed(e, 'prenom')} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalAge">
                    <Col componentClass={ControlLabel} sm={2}>
                        Age
                </Col>

                    <Col sm={10}>
                        <FormControl type="text" placeholder="Age" value={(props.data.age)} onChange={(e) => props.changed(e, 'age')} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPoste">
                    <Col componentClass={ControlLabel} sm={2}>
                        Poste
                </Col>

                    <Col sm={10}>
                    <FormControl type="text" placeholder="Poste" value={(props.data.poste)} onChange={(e) => props.changed(e, 'poste')} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalTitre">
                    <Col componentClass={ControlLabel} sm={2}>
                        Titre
                </Col>

                    <Col sm={10}>
                        <FormControl type="text" placeholder="Titre" value={(props.data.titre)} onChange={(e) => props.changed(e, 'titre')} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalDescription">
                    <Col componentClass={ControlLabel} sm={2}>
                        Description
                </Col>

                    <Col sm={10}>
                        <FormControl componentClass="textarea" placeholder="Description" value={(props.data.description)} onChange={(e) => props.changed(e, 'description')} />
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
};

export default form;