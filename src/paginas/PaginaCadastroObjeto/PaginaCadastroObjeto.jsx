import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaCadastroObjeto.css";
import { cadastrarObjeto } from "../../servicos/objetos.servico";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function PaginaCadastroObjeto() {
  const navigate = useNavigate();

  const [formObjeto, setFormObjeto] = useState({
    id: "",
    nome: "",
    descricao: "",
    categoria: "",
    preco: "",
    foto: "",
  });

  const salvar = () => {
    cadastrarObjeto(formObjeto);
    navigate("/objetos");
  };

  return (
    <Principal>
      <div className="PaginaCadastroObjeto_root">
        <div className="PaginaCadastroObjeto_voltar">
          <FaArrowAltCircleLeft size={30} onClick={() => navigate("/")} style={{ cursor: "pointer", color: "var(--cor-texto)" }} />
        </div>

        <div className="PaginaCadastroObjeto_campo">
          <CampoCustomizado
            label="Nome do Objeto"
            maxLength={30}
            placeholder="Digite o nome (ex: Furadeira)..."
            value={formObjeto.nome}
            onChange={(e) =>
              setFormObjeto({ ...formObjeto, nome: e.target.value })
            }
          />

          <CampoCustomizado
            label="Descrição"
            maxLength={100}
            placeholder="Descreva o objeto..."
            value={formObjeto.descricao}
            onChange={(e) =>
              setFormObjeto({ ...formObjeto, descricao: e.target.value })
            }
          />

          <CampoCustomizado
            label="Categoria"
            maxLength={20}
            placeholder="Ex: Ferramentas..."
            value={formObjeto.categoria}
            onChange={(e) =>
              setFormObjeto({ ...formObjeto, categoria: e.target.value })
            }
          />

          <CampoCustomizado
            label="Preço por dia (R$)"
            maxLength={10}
            placeholder="Ex: 50.00"
            value={formObjeto.preco}
            onChange={(e) =>
              setFormObjeto({ ...formObjeto, preco: e.target.value })
            }
          />

          <CampoCustomizado
            type="file"
            accept="image/*"
            label="Foto do Objeto"
            onChange={(e) => {
              const imagem = e.target.files[0];
              if (imagem) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  setFormObjeto({ ...formObjeto, foto: event.target.result });
                };
                reader.readAsDataURL(imagem);
              }
            }}
          />

          {formObjeto.foto && (
            <div>
              <img
                src={formObjeto.foto}
                alt="Foto do Objeto"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginTop: "10px"
                }}
              />
            </div>
          )}
        </div>

        <div className="PaginaCadastroObjeto_botao">
          <BotaoCustomizado tipo="primario" aoClicar={salvar}>
            Anunciar Objeto
          </BotaoCustomizado>
        </div>
      </div>
    </Principal>
  );
}

export default PaginaCadastroObjeto;