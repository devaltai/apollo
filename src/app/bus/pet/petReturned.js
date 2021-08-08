//Core
import React from "react"

//Hooks
import {usePedReturned} from "./hooks/usePetReturned"

export const PetReturned = () => {
  const {pet, error} = usePedReturned()
  const petJSX = pet && (
    <>
      <p>Id: {pet.id}</p>
      <p>Name: {pet.name}</p>
    </>
  )

  const errorJSX = error && <p>We have a problem: {error.message}</p>

  return (
    <>
      <h1>Pet Returned</h1>
      {petJSX}
      {errorJSX}
    </>
  )
}
