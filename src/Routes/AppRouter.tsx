import { useRoutes } from 'react-router-dom';
import Categories from '../pages/Categories';
import { Products } from '../pages/Products';
import ProductItem from '../pages/ProductItem';
import AdminPage from '../pages/adminPge';

function AppRouter() {

    let publicRoute = useRoutes([
        { path: "/", element: <Categories/> },
        { path: "/admin-page", element: <AdminPage/> },
        { path: "/categorie/:id", element: <Products/> },
        { path: "/products/:id", element: <ProductItem/> },
    ]);
  
  return (
    publicRoute
  )
}

export default AppRouter