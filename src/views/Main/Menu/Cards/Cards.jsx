import { useEffect } from 'react';
import { fetchProducts } from '../../../../redux/thunks/fetchProducts';
import style from './Cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../CardItem/CardItem';

export const Cards = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const { categories, activeCategory } = useSelector(state => state.categories);

  useEffect(() => {
    if (categories.length) {
      dispatch(fetchProducts(categories[activeCategory].title));
    }
  }, [categories, activeCategory, dispatch]);

  return (
    <div className={style.menu__cards}>
      {products.length ? (
        products.map((product, _) => <CardItem key={product.id} product={product} />)
      ) : (
        <div>Загрузка...</div>
      )}
    </div>
  );
};
