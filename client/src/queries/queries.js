import { gql } from 'apollo-boost';

const getEmployeesQuery = gql`
  {
    employees {
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

export { getEmployeesQuery, addEmployeeMutation, addExperienceMutation };