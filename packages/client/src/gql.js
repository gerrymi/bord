import gql from 'graphql-tag';

export const LOGIN = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    success,
    message,
    token
  }
}
`

export const SIGN_UP = gql`
mutation Register($email: String!, $username: String!, $password: String!) {
  register(email: $email, username: $username, password: $password) {
    success,
    message
  }
}
`

export const ADD_LIST = gql`
mutation AddList($name: String!) {
  addList(name: $name) {
    success
    message
  }
}
`

export const GET_USER = gql`
query GetUser {
  currentUser {
    success
    message
    user {
      username
      email
      id
      lists {
        name
        id
        tasks {
          name
          description
          id
        }
      }
    }
  }
}
`