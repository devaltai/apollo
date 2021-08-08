//Core
import React from "react"
import {ApolloProvider} from "@apollo/client"

//Componets
// import {Pet} from "./bus/pet"
// import {Customer} from "./bus/customer"
// import {Login} from "./bus/customer/login"
import {User} from "./bus/user"

//Other
import {client} from "./init/modern"

export const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <Login /> */}
      {/* <Pet /> */}
      {/* <Customer /> */}
      <User />
    </ApolloProvider>
  )
}
