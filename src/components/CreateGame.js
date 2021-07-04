import React from 'react'
import { createGameRequest } from '../requests/createGameRequest'
export const CreateGame = ({}) => (
  <p
    onClick={() => {
      createGameRequest()
    }}
  >
    test
  </p>
)
