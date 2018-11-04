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

export { getEmployeesQuery };