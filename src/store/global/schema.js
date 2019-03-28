const typeDefs = `
  type Query {
    isLoggedIn: Boolean!
  }

  type Mutation {
    toggleLoggedIn(isLoggedIn: Boolean!): Boolean
  }
`;

export default typeDefs;
