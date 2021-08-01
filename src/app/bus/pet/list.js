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

  const list = pets.map(({id, name}) => {
    return (
      <p>
        <span>id: {id}</span>
        <span>name: {name}</span>
      </p>
    )
  })
  return (
    <>
      <h1>List</h1>
      {list}
    </>
  )
}
