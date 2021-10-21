import { getMovies } from "./db";

export const resolvers = {
  Query: {
    movies: () => getMovies(),
    movies: (_, { rating, limit }) => getMovies(limit, rating)
  }
};
