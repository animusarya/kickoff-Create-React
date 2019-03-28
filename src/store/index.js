import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import globalType from './global/schema';
import globalData from './global/resolvers';
import globalDefaults from './global/defaults';

const resolvers = mergeResolvers([globalData]);
const typeDefs = mergeTypes([globalType]);

const defaults = {
  ...globalDefaults
};

export { resolvers, typeDefs, defaults };
