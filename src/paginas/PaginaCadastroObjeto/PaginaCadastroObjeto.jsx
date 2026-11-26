import { useState, useEffect } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaCadastroObjeto.css";
import { cadastrarObjeto, buscarObjetoPorId, atualizarObjeto } from "../../servicos/objetos.servico";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { toast } from "react-toastify";

function PaginaCadastroObjeto() {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [formObjeto, setFormObjeto] = useState({
    id: "",
    nome: "",
    descricao: "",
    categoria: "",
    preco: "",
    foto: "",
  });

  useEffect(() => {
    if (id) {
      const objetoExistente = buscarObjetoPorId(id);
      if (objetoExistente) {
        setFormObjeto(objetoExistente);
      }
    }
  }, [id]);

  const salvar = () => {
    if(!formObjeto.nome || !formObjeto.categoria || !formObjeto.preco || !formObjeto.foto){
      toast.error("Informações faltando!!!")
    return
    }
   
    if (id) {
      atualizarObjeto(formObjeto);
      
    } else {
      cadastrarObjeto(formObjeto);
    }
    navigate("/objetos");
  };

  return (
    <Principal>
      <div className="PaginaCadastroObjeto_root">
        <div className="PaginaCadastroObjeto_voltar">
          <FaArrowAltCircleLeft size={30} onClick={() => navigate("/")} className="icone-voltar" />
        </div>

        <div className="PaginaCadastroObjeto_campo">
          <CampoCustomizado
            label="Nome do Objeto"
            maxLength={30}
            placeholder="Digite o nome (ex: Furadeira)..."
            value={formObjeto.nome}
            onChange={(e) => setFormObjeto({ ...formObjeto, nome: e.target.value })}
          />

          <CampoCustomizado
            label="Descrição"
            maxLength={100}
            placeholder="Descreva o objeto..."
            value={formObjeto.descricao}
            onChange={(e) => setFormObjeto({ ...formObjeto, descricao: e.target.value })}
          />

          <CampoCustomizado
            label="Categoria"
            maxLength={20}
            placeholder="Ex: Ferramentas..."
            value={formObjeto.categoria}
            onChange={(e) => setFormObjeto({ ...formObjeto, categoria: e.target.value })}
          />

          <CampoCustomizado
            label="Preço por dia (R$)"
            type="number"
            maxLength={10}
            placeholder="Ex: 50.00"
            value={formObjeto.preco}
            onChange={(e) => setFormObjeto({ ...formObjeto, preco: e.target.value })}
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
            <div className="preview-foto">
              <img src={formObjeto.foto} alt="Foto do Objeto" />
            </div>
          )}
        </div>

        <div className="PaginaCadastroObjeto_botao">
          <BotaoCustomizado tipo="adicional" aoClicar={salvar}>
            {id ? "Salvar Alterações" : "Anunciar Objeto"}
          </BotaoCustomizado>
        </div>
      </div>
    </Principal>
  );
}

export default PaginaCadastroObjeto;