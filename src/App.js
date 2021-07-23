import React, { useState } from 'react'

const App = () => {
  const [contador, setContador] = useState(0)

  const sum = () => {
    setContador(state => {
      return state + 1
    })
  }
  return (
    <>
      <h1>Hello, world!</h1>
      <h2>Contador: {contador}</h2>
      <button onClick={sum}>Sumar</button>
    </>
  )
}

export default App
