const resolvers = {
  Mutation: {
    toggleLoggedIn: (_, variables, { cache }) => {
      const { isLoggedIn } = variables.input;
      const data = {
        isLoggedIn
      };
      // update local store
      cache.writeData({ data });
      return isLoggedIn;
    }
  }
};

export default resolvers;
