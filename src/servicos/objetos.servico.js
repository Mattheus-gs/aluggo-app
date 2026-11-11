import { buscarLocalStorage, salvarLocalStorage } from './localstorage.servico';

const CHAVE_OBJETOS = 'aluggo_objetos';

export const cadastrarObjeto = (objeto) => {
    const objetos = buscarLocalStorage(CHAVE_OBJETOS) || [];
    objeto.id = Date.now(); // Gera um ID único
    objeto.disponivel = true; // Todo objeto cadastrado começa disponível
    objetos.push(objeto);
    salvarLocalStorage(CHAVE_OBJETOS, objetos);
};

export const listarObjetos = () => {
    return buscarLocalStorage(CHAVE_OBJETOS) || [];
};

export const excluirObjeto = (id) => {
    const objetos = buscarLocalStorage(CHAVE_OBJETOS) || [];
    const objetosFiltrados = objetos.filter(obj => obj.id !== id);
    salvarLocalStorage(CHAVE_OBJETOS, objetosFiltrados);
};