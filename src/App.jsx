import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Header } from './views/Header/Header';
import { Main } from './views/Main/Main';
import { Cart } from './views/Cart/Cart';
import { useEffect } from 'react';
import { fetchCart } from './redux/thunks/fetchCart';
import { useDispatch, useSelector } from 'react-redux';
import { About } from './views/About/About';
import { Footer } from './views/Footer/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header isEmpty={false} hideCart={false} />
        <Main />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Header isEmpty={true} hideCart={false} />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Header isEmpty={true} hideCart={true} />
        <Cart />
      </>
    ),
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { status: cartStatus } = useSelector(state => state.cart);

  useEffect(() => {
    if (cartStatus === 'idle') {
      dispatch(fetchCart());
    }
  });

  return <RouterProvider router={router} />;
};

export default App;
