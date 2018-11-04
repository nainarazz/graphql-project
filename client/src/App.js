import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import EmployeeList from './components/EmployeeList';

// the uri here should not be hardcoded, but simplicity, it is hardcoded here.
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="">
      <EmployeeList />
    </div>
  </ApolloProvider>
);

export default App;
