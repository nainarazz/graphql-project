import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
    Modal,
    Button,
} from 'react-bootstrap';
import { 
    getEmployeesQuery, 
    addEmployeeMutation, 
    addExperienceMutation, 
    updateEmployeeMutation, 
    updateExperienceMutation 
} from '../queries/queries';
import EmployeeForm from './employeeForm';

class ModalInput extends Component {
    state = {
        formFields: {
            nom: '',
            prenom: '',
            age: '',
            poste: '',
            titre: '',
            description: ''
        },
        initialFields: {
            nom: '',
            prenom: '',
            age: '',
            poste: '',
            titre: '',
            description: ''
        }
    }

    submitForm = async e => {
        e.preventDefault();

        const insertedExperience = await this.props.addExperienceMutation({
            variables: {
                titre: this.state.titre,
                description: this.state.description
            }
        });

        await this.props.addEmployeeMutation({
            variables: {
                nom: this.state.nom,
                prenom: this.state.prenom,
                age: parseInt( this.state.age, 10),
                poste: this.state.poste,
                experienceId: insertedExperience.data.addExperience.id,
            },
            refetchQueries: [{ query: getEmployeesQuery }]
        });
        
        this.props.onHide();
    }

    handleSave = () => {
        this.setState({ showModal: false });
      }

    changed = (e, identifier) => {
        const state = { ...this.state.formFields };
        state[identifier] = e.target.value;
        
        this.setState({ formFields: state });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data) {
            const {experience, ...employeeDetail} = nextProps.data;
            const data = { ...experience, ...employeeDetail };

            this.setState({formFields: data});
        } else {
            const emptyFields = { 
                nom: '',
                prenom: '',
                age: '',
                poste: '',
                titre: '',
                description: ''
            }
            this.setState({
                formFields: { ...emptyFields }
            });
        }
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Employee Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EmployeeForm data={this.state.formFields} changed={this.changed}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.submitForm}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default compose(
    graphql(addEmployeeMutation, { name: 'addEmployeeMutation'}),
    graphql(addExperienceMutation, { name: 'addExperienceMutation'}),
    graphql(updateEmployeeMutation, { name: 'updateEmployeeMutation'}),
    graphql(updateExperienceMutation, { name: 'updateExperienceMutation'}),
)(ModalInput);