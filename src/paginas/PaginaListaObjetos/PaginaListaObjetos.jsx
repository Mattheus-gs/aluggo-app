import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- Importamos o Link aqui
import { listarObjetos, excluirObjeto } from '../../servicos/objetos.servico';
import BotaoCustomizado from '../../componentes/BotaoCustomizado/BotaoCustomizado';

const PaginaListaObjetos = () => {
    const [objetos, setObjetos] = useState([]);

    useEffect(() => {
        setObjetos(listarObjetos());
    }, []);

    const handleExcluir = (id) => {
        if (window.confirm('Tem certeza que deseja remover este objeto do Aluggo?')) {
            excluirObjeto(id);
            setObjetos(listarObjetos());
        }
    };

    return (
        <main className="principal" style={{ padding: '20px' }}>
            {/* Botão de voltar */}
            <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: 'var(--cor-texto)', textDecoration: 'none', fontWeight: 'bold' }}>
                &larr; Voltar para o Início
            </Link>

            <h2>Objetos Disponíveis</h2>
            
            {objetos.length === 0 ? (
                <p style={{ marginTop: '20px' }}>Nenhum objeto disponível no momento. Seja o primeiro a anunciar!</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
                    {objetos.map(obj => (
                        <div key={obj.id} style={{ border: '2px solid var(--cor-primaria)', borderRadius: '8px', padding: '20px', backgroundColor: 'var(--cor-primaria)' }}>
                            <h3 style={{ color: 'var(--cor-texto)', margin: '0 0 10px 0' }}>{obj.nome}</h3>
                            <p style={{ margin: '5px 0', color: 'var(--cor-texto)' }}><strong>Descrição:</strong> {obj.descricao}</p>
                            <p style={{ margin: '5px 0', color: 'var(--cor-texto)' }}><strong>Categoria:</strong> {obj.categoria}</p>
                            <p style={{ margin: '5px 0', color: 'var(--cor-texto)', fontSize: '1.2em', fontWeight: 'bold' }}>
                                R$ {obj.preco} / dia
                            </p>
                            <p style={{ color: obj.disponivel ? 'var(--cor-secundaria)' : 'red', fontWeight: 'bold', margin: '10px 0' }}>
                                {obj.disponivel ? '🟢 Disponível' : '🔴 Alugado'}
                            </p>
                            <BotaoCustomizado onClick={() => handleExcluir(obj.id)}>Remover Anúncio</BotaoCustomizado>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
};

export default PaginaListaObjetos;