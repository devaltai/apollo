//Core
import React from "react"
import {ApolloProvider} from "@apollo/client"

//Componets
import {Pet} from "./bus/pet"
// import {Customer} from "./bus/customer"
import {Login} from "./bus/customer/login"

//Other
import {client} from "./init/client"

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Login />
      <Pet />
      {/* <Customer /> */}
    </ApolloProvider>
  )
}
