import { Block } from './components/Block';
import { Button } from './components/Button';

export function App() {
  return (
    <div>
      <Block title="Pena" color="#F6E4E2" />
      <Block title="Redução" color="#C1C3D2" />

      <Button title="Calcular" onClick={ () => {} }></Button>

      <div className="retorno"></div>
    </div>
  )
}
