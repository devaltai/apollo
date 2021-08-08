//Core
import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client"

//GraphQL Server
const uri = "https://funded-pet-library.moonhighway.com/"
const link = createHttpLink({
  uri,
})
//Initialization cache
const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  link,
})
