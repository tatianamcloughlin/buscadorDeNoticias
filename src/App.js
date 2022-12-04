import logo from './logo.svg';
import './App.css';
import PaginaPrincipal from './paginas/PaginaPrincipal';
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
]);



function App() {
  return (  
    <div className="App">
        <RouterProvider router = {router} />
    </div>
  );
}

export default App;
