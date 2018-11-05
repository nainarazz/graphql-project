import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
    Modal,
    Button,
    FormControl,
    FormGroup,
    ControlLabel,
    Col,
    Form
} from 'react-bootstrap';

const form = props => {
    return (
        <div>
            <FormControl type="text" placeholder="Nom" value={(props.data && props.data.nom) || ""} onChange={(e) => props.changed(e, 'nom')} />
            <FormControl type="text" placeholder="prenom" value={(props.data && props.data.prenom) || ""} onChange={(e) => props.changed(e, 'prenom')} />
        </div>
    )
};

export default form;