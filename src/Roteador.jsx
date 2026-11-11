import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import PaginaCadastroObjeto from './paginas/PaginaCadastroObjeto/PaginaCadastroObjeto';
import PaginaListaObjetos from './paginas/PaginaListaObjetos/PaginaListaObjetos';
// Importe o Cabeçalho e Rodapé se eles costumam ficar em volta das rotas no seu projeto
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';

const Roteador = () => {
    return (
        
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/objetos" element={<PaginaListaObjetos />} />
                <Route path="/cadastro-objeto" element={<PaginaCadastroObjeto />} />
            </Routes>
            
    );
};

export default Roteador;