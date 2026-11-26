import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaListaObjetos.css";
import { listarObjetos, excluirObjeto } from "../../servicos/objetos.servico";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft, FaEdit, FaTrash } from "react-icons/fa";

function PaginaListaObjetos() {
  const navigate = useNavigate();
  const [objetos, setObjetos] = useState(listarObjetos());

  const handleExcluir = (id) => {
    if (confirm("Tem certeza que deseja apagar este objeto?")) {
      excluirObjeto(id);
      setObjetos(listarObjetos());
    }
  };

  return (
    <Principal>
      <FaArrowAltCircleLeft size={30} onClick={() => navigate("/")} className="icone-voltar" />
      <div className="PaginaListaObjetos_root">
        {objetos.map((objeto) => (
          <div key={objeto.id} className="PaginaListaObjetos_objeto">
            <div className="imagem">
            {objeto.foto && <img src={objeto.foto} alt={objeto.nome} />}
            </div>
            <div className="infos">
              <strong className="modelo">{objeto.nome}</strong>
              <br />
              <strong >{objeto.descricao || "Descrição não informada"}</strong>
              <br />
              <span>Categoria: {objeto.categoria}</span>
              <br />
              <span>Preço/dia: R$ {objeto.preco}</span>
              <br />
              <span className={objeto.disponivel ? "status-disponivel" : "status-alugado"}>
                situação:  {objeto.disponivel ? "Disponível" : "Alugado"}
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
          <div
          className="PaginaListaObjetos_textoAdd"
              onClick={() => navigate("/cadastro-objeto")}>
            
              
            
              
              +
           
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