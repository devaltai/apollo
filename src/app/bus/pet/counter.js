//Core
import React from "react"

//Hooks
import {useQueryAvailablePets} from "./hooks/useQueryAvailablePets"

export const Counter = () => {
  const {loading, error, data} = useQueryAvailablePets()

  return (
    <>
      <h1>Counter</h1>
      <span>availablePets: {data.availablePets}</span>
    </>
  )
}
