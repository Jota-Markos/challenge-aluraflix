
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaInicial from "./paginas/Inicio/Inicio"
import PaginaAdicao from "./paginas/AdicionarVideo/AdicionarVideo"
import PaginaPadrao from "./paginas/PaginaPadrao/PaginaPadrao"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<PaginaInicial/>}/>
          <Route path="/adicionarvideo" element={<PaginaAdicao/>}/>
        </Route>
        
      </Routes>

    </BrowserRouter>
  );
};

export default App
