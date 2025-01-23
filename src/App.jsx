import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products'
import RecienLlegados from './pages/RecienLlegados/RecienLlegados'
import Footer from './components/Footer/Footer';
import Descuento from './pages/Descuento/Descuento'
import './App.scss'

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productos",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: '/articulos-nuevos',
        element: <RecienLlegados />
      },
      {
        path: '/ofertas-especiales',
        element: <Descuento />
      }
    ],
  },
]);

function App() {



  return (
      <div>
      <RouterProvider router={router} />
      </div>
  )
}

export default App;
