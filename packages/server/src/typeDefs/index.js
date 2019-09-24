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
    id: ID
  }
  type Task {
    name: String
    description: String
    id: ID
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
    addList(name: String!): Response!
    addTask(listId: String!, name: String!, description: String): Response!
    deleteList(listId: String!): Response!
    deleteTask(listId: String!, taskId: String!): Response!
    deleteUser(email: String!, userId: String!): Response!
  }
`;