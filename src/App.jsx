import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Header } from './views/Header/Header';
import { Main } from './views/Main/Main';
import { Cart } from './views/Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Main />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Header />
        <Cart />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
