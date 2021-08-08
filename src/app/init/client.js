//Core
import {ApolloClient, InMemoryCache, split} from "@apollo/client"
import {createHttpLink} from "apollo-link-http"
import {getMainDefinition} from "@apollo/client/utilities"
import {WebSocketLink} from "@apollo/client/link/ws"
import {setContext} from "@apollo/client/link/context"

const root = "funded-pet-library.moonhighway.com/"
//GraphQL Server
const uri = `https://${root}`
const httpLink = createHttpLink({
  uri,
})

//WS
const wslink = new WebSocketLink({
  uri: `ws://${root}graphql`,
  options: {
    reconect: true,
  },
})

//Auth
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem("token")

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})
const wrappedHttpLink = authLink.concat(httpLink)

const link = split(
  ({query}) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wslink,
  wrappedHttpLink
)

//Initialization cache
const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  link,
})
