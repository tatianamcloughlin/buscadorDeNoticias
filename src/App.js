import logo from './logo.svg';
import './App.css';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import PagNoticia from './paginas/PaginaNoticiaDescripcion';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaPrincipal/>,
  },
  {
    path: "/buscador",
    element: <PaginaPrincipal/>,
  },
  {
    path: "/:id",
    element: <PagNoticia/>,
  },
]);



function App() {
  return (  
    <div className="App">
        <RouterProvider router = {router} />
    </div>
  );
}

export default App;
