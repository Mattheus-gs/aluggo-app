import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaCadastroObjeto from "./paginas/PaginaCadastroObjeto/PaginaCadastroObjeto";
import PaginaListaObjetos from "./paginas/PaginaListaObjetos/PaginaListaObjetos";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "objetos",
    element: <PaginaListaObjetos />,
  },
  {
    path: "cadastro-objeto/:id?",
    element: <PaginaCadastroObjeto />,
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;