import { useState } from "react";
import { Result } from "./components/Result";
import { Block } from "./components/Block";

export function App() {

  const [penaValues, setPenaValues] = useState<number[]>([0, 0, 0])
  const [reducaoValues, setReducaoValues] = useState<number[]>([0, 0, 0])
  const [showResult, setShowResult] = useState<boolean>(false)

  function handlePenaValues(index: number, value: number) {
    const newValues = [...penaValues]
    newValues[index] = value
    setPenaValues(newValues)
  }

  function handleReducaoValues(index: number, value: number) {
    const newValues = [...reducaoValues]
    newValues[index] = value
    setReducaoValues(newValues)
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setShowResult(true)
    console.log(penaValues, reducaoValues)
  }

  return (
    <div className="container">
      <h1>Calculadora de Redução Penal</h1>

      <form onSubmit={handleSubmit}>
        <Block color="#F6E4E2" label="Pena" values={penaValues} onChange={handlePenaValues} />

        <Block color="#C1C3D2" label="Redução" values={reducaoValues} onChange={handleReducaoValues} />

        <button>Calcular</button>
      </form>

      {showResult && (
        <Result />
      )}
    </div>
  )
}
