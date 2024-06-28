import { useRoutes } from 'react-router-dom';
import Categories from '../pages/Categories';
import { Products } from '../pages/Products';
import ProductItem from '../pages/ProductItem';

function AppRouter() {

    let publicRoute = useRoutes([
        { path: "/", element: <Categories/> },
        { path: "/categorie/:id", element: <Products/> },
        { path: "/products/:id", element: <ProductItem/> },
    ]);
  
  return (
    publicRoute
  )
}

export default AppRouter