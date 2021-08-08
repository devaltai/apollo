//Core
import {useSubscription} from "@apollo/client"
import {loader} from "graphql.macro"

// Mutations
const subscriptionPetReturned = loader("./gql/subscriptionPetReturned.graphql")

export const usePedReturned = () => {
  const {loading, error, data} = useSubscription(subscriptionPetReturned)

  const pet = data ? data.petReturned.pet : null

  return {loading, error, pet}
}
