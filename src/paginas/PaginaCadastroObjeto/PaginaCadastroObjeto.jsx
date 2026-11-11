import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { cadastrarObjeto } from '../../servicos/objetos.servico';
import CampoCustomizado from '../../componentes/CampoCustomizado/CampoCustomizado';
import BotaoCustomizado from '../../componentes/BotaoCustomizado/BotaoCustomizado';

const PaginaCadastroObjeto = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!nome || !descricao || !categoria || !preco) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        cadastrarObjeto({ nome, descricao, categoria, preco });
        alert('Objeto disponibilizado com sucesso no Aluggo!');
        navigate('/objetos');
    };

    return (
        <main className="principal" style={{ padding: '20px', color: 'var(--cor-texto)' }}>
            {/* Botão de voltar */}
            <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: 'var(--cor-texto)', textDecoration: 'none', fontWeight: 'bold' }}>
                &larr; Voltar para o Início
            </Link>

            <h2>Anunciar Objeto para Aluguel</h2>
            <p>Ajude a reduzir o desperdício disponibilizando os seus objetos.</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', marginTop: '20px', backgroundColor: 'var(--cor-primaria)', padding: '20px', borderRadius: '8px' }}>
                <CampoCustomizado label="Nome do Objeto (ex: Furadeira)" valor={nome} setValor={setNome} />
                <CampoCustomizado label="Descrição breve" valor={descricao} setValor={setDescricao} />
                <CampoCustomizado label="Categoria (ex: Ferramentas, Esportes)" valor={categoria} setValor={setCategoria} />
                <CampoCustomizado label="Preço por dia (R$)" valor={preco} setValor={setPreco} tipo="number" />
                
                <BotaoCustomizado tipo="primario">Publicar Anúncio</BotaoCustomizado>
            </form>
        </main>
    );
};

export default PaginaCadastroObjeto;