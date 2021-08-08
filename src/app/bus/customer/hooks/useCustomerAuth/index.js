//Core
import {useMutation} from "@apollo/client"
import {loader} from "graphql.macro"

//Hooks
import {useForm} from "../useForm"

//Mutation
const mutationLogIn = loader("./gql/mutationLogIn.graphql")

export const useCustomerAuth = () => {
  const [_logIn, {data}] = useMutation(mutationLogIn)
  const {form, handleChange} = useForm({
    username: "",
    password: "",
  })

  const authorizedCustomer = data && data.logIn
  const token = authorizedCustomer && authorizedCustomer.token
  if (token) {
    localStorage.setItem("token", token)
  }

  const logIn = () => {
    _logIn({
      variables: form,
    })
  }

  return {
    handleChange,
    logIn,
    authorizedCustomer,
  }
}
