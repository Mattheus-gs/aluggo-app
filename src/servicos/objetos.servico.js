import { buscarLocalStorage, salvarLocalStorage } from './localstorage.servico';

const CHAVE_OBJETOS = 'aluggo_objetos';

export const cadastrarObjeto = (objeto) => {
    const objetos = buscarLocalStorage(CHAVE_OBJETOS) || [];
    objeto.id = Date.now();
    objeto.disponivel = true;
    objetos.push(objeto);
    salvarLocalStorage(CHAVE_OBJETOS, objetos);
};

export const listarObjetos = () => {
    return buscarLocalStorage(CHAVE_OBJETOS) || [];
};

export const buscarObjetoPorId = (id) => {
    const objetos = buscarLocalStorage(CHAVE_OBJETOS) || [];
    return objetos.find(obj => String(obj.id) === String(id));
};

export const atualizarObjeto = (objetoAtualizado) => {
    const objetos = buscarLocalStorage(CHAVE_OBJETOS) || [];
    const objetosAtualizados = objetos.map(obj => 
        String(obj.id) === String(objetoAtualizado.id) ? objetoAtualizado : obj
    );
    salvarLocalStorage(CHAVE_OBJETOS, objetosAtualizados);
};

export const excluirObjeto = (id) => {
    const objetos = buscarLocalStorage(CHAVE_OBJETOS) || [];
    const objetosFiltrados = objetos.filter(obj => String(obj.id) !== String(id));
    salvarLocalStorage(CHAVE_OBJETOS, objetosFiltrados);
};