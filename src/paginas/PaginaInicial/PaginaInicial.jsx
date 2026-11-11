import { Link } from 'react-router-dom';

const PaginaInicial = () => {
    return (
        <main className="principal" style={{ padding: '40px 20px', textAlign: 'center', color: '#fff' }}>
            <h1>Bem-vindo ao Aluggo!</h1>
            <p style={{ marginTop: '10px', fontSize: '1.2rem' }}>Alugue. Use. Reutilize.</p>
            
            <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/objetos" style={{ backgroundColor: 'var(--cor-botao)', color: '#fff', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px' }}>
                    Ver Objetos Disponíveis
                </Link>
                <Link to="/cadastro-objeto" style={{ backgroundColor: 'var(--cor-aviso)', color: '#fff', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px' }}>
                    Anunciar um Objeto
                </Link>
            </div>
        </main>
    );
};

export default PaginaInicial;