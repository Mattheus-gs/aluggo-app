import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaListaObjetos.css";
import { listarObjetos } from "../../servicos/objetos.servico";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

function PaginaListaObjetos() {
  const navigate = useNavigate();
  const [objetos, setObjetos] = useState(listarObjetos());

  return (
    <Principal>
      <div className="PaginaListaObjetos_root">
        <FaArrowAltCircleLeft
          size={30}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", color: "var(--cor-texto)" }}
        />
        {objetos.map((objeto) => {
          return (
            <div key={objeto.id} className="PaginaListaObjetos_objeto">
              <div className="foto">
                {objeto.foto && <img src={objeto.foto} alt="Objeto" />}
              </div>

              <div className="infos">
                <strong className="modelo">{objeto.nome}</strong>
                <br></br>
                <span> Categoria: {objeto.categoria}</span>
                <br></br>
                <span>Preço/dia: R$ {objeto.preco}</span>
                <br></br>
              </div>
            </div>
          );
        })}

        <div className="PaginaListaObjetos_addObjeto">
          <BotaoCustomizado
            className="botao"
            aoClicar={() => navigate("/cadastro-objeto")}
            style={{
              cursor: "pointer",
              color: "var(--cor-texto)",
              fontWeight: "bold",
            }}
          >
            
           <span>Adicionar objeto</span>
            <span>+</span>
          </BotaoCustomizado>
        </div>
      </div>

      {!objetos.length && (
        <span
          className="PaginaListaObjetos_vazia"
          style={{
            color: "var(--cor-texto)",
            display: "block",
            marginTop: "20px",
          }}
        >
          Nenhum objeto disponível no momento.
        </span>
      )}
    </Principal>
  );
}

export default PaginaListaObjetos;
