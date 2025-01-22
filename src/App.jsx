import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products'
import RecienLlegados from './pages/RecienLlegados/RecienLlegados'
import Footer from './components/Footer/Footer';
import './App.scss'
import MasVendido from './pages/MasVendido/MasVendido';

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
        path: '/recien-llegados',
        element: <RecienLlegados />
      },
      {
        path: '/mas-vendido',
        element: <MasVendido />
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
