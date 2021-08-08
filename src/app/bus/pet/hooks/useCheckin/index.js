//Core
import {useState} from "react"
import {useMutation} from "@apollo/client"
import {loader} from "graphql.macro"

//Mutation
const mutationCheckIn = loader("./gql/mutationCheckIn.graphql")

export const useCheckin = () => {
  const [_checkIn, {data, errors}] = useMutation(mutationCheckIn)
  const [error, setError] = useState(false)

  const checkIn = (id) => {
    ;(async () => {
      try {
        await _checkIn({
          variables: {id},
        })
      } catch (error) {
        setError(error.message)
      }
    })()
  }

  const pet = data && data.checkIn.pet

  return {
    checkIn,
    pet,
    error,
    errors,
  }
}
