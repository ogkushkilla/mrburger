import style from './Cards.module.css';
import { CardItem } from '../CardItem/CardItem';

export const Cards = ({ products }) => {
  return (
    <div className={style.menu__cards}>
      {products.map((product, _) => (
        <CardItem key={product.id} product={product} />
      ))}
    </div>
  );
};
