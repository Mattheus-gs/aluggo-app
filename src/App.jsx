import { BrowserRouter } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';
import Roteador from './Roteador';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Roteador />
      <Rodape />
    </BrowserRouter>
  );
}

export default App;