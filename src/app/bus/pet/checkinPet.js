//Core
import React from "react"

//Hooks
import {useCheckin} from "./hooks/useCheckin"

export const CheckinPet = () => {
  const {checkIn, pet, error, errors} = useCheckin()

  const petJSX = pet && (
    <>
      <p>Id: {pet.id}</p>
      <p>Name: {pet.name}</p>
    </>
  )
  const errorJSX = error && <p>We have a problem: {error}</p>
  const errorsJSX = errors && <p>We have another problem: {errors.message}</p>

  return (
    <>
      <h1>Checkin Pet</h1>
      <button onClick={() => checkIn("c-1")}>Check In</button>
      {petJSX}
      {errorJSX}
      {errorsJSX}
    </>
  )
}
