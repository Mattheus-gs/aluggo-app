import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaListaObjetos.css";
import { listarObjetos, excluirObjeto } from "../../servicos/objetos.servico";
import { useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";

function PaginaListaObjetos() {
  const navigate = useNavigate();
  const [objetos, setObjetos] = useState(listarObjetos());

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja apagar este objeto?")) {
      excluirObjeto(id);
      setObjetos(listarObjetos());
    }
  };

  return (
    <Principal>
      <div className="PaginaListaObjetos_root">
        {objetos.map((objeto) => (
          <div key={objeto.id} className="PaginaListaObjetos_objeto">
            {objeto.foto && <img src={objeto.foto} alt={objeto.nome} />}

            <div className="infos">
              <strong className="modelo">{objeto.nome}</strong>
              <span>Categoria: {objeto.categoria}</span>
              <span>Preço/dia: R$ {objeto.preco}</span>
              <span className={objeto.disponivel ? "status-disponivel" : "status-alugado"}>
                {objeto.disponivel ? "Disponível" : "Alugado"}
              </span>
            </div>

            <div className="PaginaListaObjetos_acoes">
              <button 
                className="btn-editar" 
                onClick={() => navigate(`/cadastro-objeto/${objeto.id}`)}
                title="Editar"
              >
                <FaEdit size={20} />
              </button>
              <button 
                className="btn-apagar" 
                onClick={() => handleExcluir(objeto.id)}
                title="Apagar"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        ))}

        <div className="PaginaListaObjetos_addObjeto">
          <div>
            <span
              className="PaginaListaObjetos_textoAdd"
              onClick={() => navigate("/cadastro-objeto")}
            >
              Anunciar Novo Objeto
            </span>
          </div>

          <div className="PaginaListaObjetos_botaoAdd">
            <IoIosAdd size={70} onClick={() => navigate("/cadastro-objeto")} />
          </div>
        </div>
      </div>

      {!objetos.length && (
        <span className="PaginaListaObjetos_vazia">
          Nenhum objeto disponível no momento.
        </span>
      )}
    </Principal>
  );
}

export default PaginaListaObjetos;