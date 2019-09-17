import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID
    email: String
    username: String
    lists: [List]
  }
  type List {
    name: String
    tasks: [Task]
  }
  type Task {
    name: String
    description: String
  }
  type Response {
    success: Boolean!
    message: String
    user: User
    list: List
    task: Task
    token: String
  }
  type Query {
    currentUser: Response!
  }
  type Mutation {
    register(email: String!, username: String!, password: String!): Response!
    login(username: String!, password: String!): Response!
  }
`;