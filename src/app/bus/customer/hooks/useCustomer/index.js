//Core
import {useMutation} from "@apollo/client"
import {loader} from "graphql.macro"

//Hooks

import {useForm} from "../useForm"

//Mutation
const mutationCreateAccount = loader("./gql/mutationCreateAccount.graphql")

export const useCustomer = () => {
  const [addUser, {data}] = useMutation(mutationCreateAccount)
  const {form, handleChange} = useForm({
    name: "",
    username: "",
    password: "",
  })

  const save = () => {
    addUser({
      variables: {
        account: form,
      },
    })
  }
  return {
    handleChange,
    save,
    createdAccount: data && data.createAccount,
  }
}
