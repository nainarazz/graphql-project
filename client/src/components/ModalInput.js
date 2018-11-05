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
            id: '',
            nom: '',
            prenom: '',
            age: '',
            poste: '',
            experienceId: '',
            titre: '',
            description: ''
        },
        initialFields: {
            id: '',
            nom: '',
            prenom: '',
            age: '',
            poste: '',
            experienceId: '',
            titre: '',
            description: ''
        }
    }

    submitForm = async e => {
        e.preventDefault();
        if (this.state.formFields.id) {
            await this.updateData();
        } else {
            await this.saveData();
        }
    }

    saveData = async () => {
        const experienceResult = await this.props.addExperienceMutation({
            variables: {
                titre: this.state.formFields.titre || "",
                description: this.state.formFields.description || ""
            }
        });

        await this.props.addEmployeeMutation({
            variables: {
                nom: this.state.formFields.nom || "",
                prenom: this.state.formFields.prenom || "",
                age: parseInt( this.state.formFields.age, 10) || 0,
                poste: this.state.formFields.poste || "",
                experienceId: experienceResult.data.addExperience.id || "",
            },
            refetchQueries: [{ query: getEmployeesQuery }]
        });
        
        this.initializeState();
        this.props.onHide();
    }

    updateData = async () => {
        await this.props.updateExperienceMutation({
            variables: {
                id: this.state.formFields.experienceId,
                titre: this.state.formFields.titre || "",
                description: this.state.formFields.description || ""
            }
        });

        await this.props.updateEmployeeMutation({
            variables: {
                id: this.state.formFields.id || "",
                nom: this.state.formFields.nom || "",
                prenom: this.state.formFields.prenom || "",
                age: parseInt( this.state.formFields.age, 10) || 0,
                poste: this.state.formFields.poste || "",
                experienceId: this.state.formFields.experienceId || "",
            },
            refetchQueries: [{ query: getEmployeesQuery }]
        });
        
        this.initializeState();
        this.props.onHide();
    }

    initializeState = () => {
        this.setState({ formFields: { ...this.state.initialFields} });
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
            this.setState({
                formFields: { ...this.state.initialFields },
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