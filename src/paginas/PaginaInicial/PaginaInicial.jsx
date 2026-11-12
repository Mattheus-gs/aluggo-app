import { Link } from 'react-router-dom';
import './PaginaInicial.css';

const PaginaInicial = () => {
    return (
        <main className="pagina-inicial">
            <h1>Bem-vindo ao Aluggo!</h1>
            <p className="subtitulo">Alugue. Use. Reutilize.</p>
            
            <div className="botoes-acao">
                <Link to="/objetos" className="btn-primario">
                    Ver Objetos Disponíveis
                </Link>
                <Link to="/cadastro-objeto" className="btn-secundario">
                    Anunciar um Objeto
                </Link>
            </div>
        </main>
    );
};

export default PaginaInicial;