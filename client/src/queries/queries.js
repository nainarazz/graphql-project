import { gql } from 'apollo-boost';

const getEmployeesQuery = gql`
  {
    employees {
      id,
      nom,
      prenom,
      age,
      poste,
      experience {
        titre,
        description
      }
    }
  }
`

const getEmployeeQuery = gql`
    query($id: String) {
        employee(id: $id) {
            id,
            nom,
            prenom
        }
    } 
`

const addEmployeeMutation = gql`
  mutation AddEmployee($nom: String!, $prenom: String!, $age: Int!, $poste: String!, $experienceId: ID!) {
    addEmployee(nom: $nom, prenom: $prenom, age: $age, poste: $poste, experienceId: $experienceId) {
        id,
        nom,
        prenom
    }
  }
`
const addExperienceMutation = gql`
  mutation AddExperience($titre: String!, $description: String!) {
    addExperience(titre: $titre, description: $description) {
        id
    }
  }
`

const updateEmployeeMutation = gql`
  mutation UpdateEmployee($id: String!, $nom: String!, $prenom: String!, $age: Int!, $poste: String!, $experienceId: ID!) {
    updateEmployee(id: $id, nom: $nom, prenom: $prenom, age: $age, poste: $poste, experienceId: $experienceId) {
        id,
        nom,
        prenom
    }
  }
`

const updateExperienceMutation = gql`
  mutation UpdateExperience($id: String!, $titre: String!, $description: String!) {
    updateExperience(id: $id, titre: $titre, description: $description) {
        id
    }
  }
`

const deleteEmployeeMutation = gql`
  mutation DeleteEmployee($id: String!, $nom: String!, $prenom: String!, $age: Int!, $poste: String!, $experienceId: ID!) {
    deleteEmployee(id: $id) {
        id,
        nom,
        prenom
    }
  }
`

const deleteExperienceMutation = gql`
  mutation DeleteExperience($id: String!, $nom: String!, $prenom: String!, $age: Int!, $poste: String!, $experienceId: ID!) {
    deleteExperience(id: $id) {
        id
    }
  }
`

export { 
    getEmployeeQuery, 
    getEmployeesQuery, 
    addEmployeeMutation, 
    addExperienceMutation,
    updateEmployeeMutation,
    updateExperienceMutation,
    deleteEmployeeMutation,
    deleteExperienceMutation
};