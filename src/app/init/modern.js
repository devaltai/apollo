//Core
import {ApolloClient, InMemoryCache} from "@apollo/client"
import {createHttpLink} from "apollo-link-http"
//GraphQL Server
const uri = `http://localhost:4000/`
const link = createHttpLink({
  uri,
  credentials: "include",
})

//Initialization cache
const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  link,
})
