//Core
import React from "react"

//Hooks
import {useQueryAllPets} from "./hooks/useQueryAllPets"

export const List = () => {
  const {loading, error, pets} = useQueryAllPets()

  if (loading) {
    return <p>Loading ...</p>
  }

  if (error) {
    return <p>We have a problem: {error.message}</p>
  }

  const petsJSX = pets.map(({id, name, weight}) => {
    return (
      <p key={id}>
        <span>name: {name}</span>
        <span>weight: {weight}</span>
      </p>
    )
  })
  return (
    <>
      <h1>List</h1>
      {petsJSX}
    </>
  )
}
