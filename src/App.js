
import './App.css';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Error404 from './componentes/errores/404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaPrincipal/>,
    errorElement: <Error404 />,
  },
  {
    path: "/buscador",
    element: <PaginaPrincipal/>,
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
