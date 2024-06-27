import { useRef } from 'react';
import style from './CartItem.module.css';

export const CartItem = ({ products, product, totalPrice, setTotalPrice }) => {
  const counter = useRef();

  const deleteProduct = product => {
    const currentProductIndex = products.indexOf(product);

    if (currentProductIndex > -1) {
      products.splice(currentProductIndex, 1);
      localStorage.setItem('products', JSON.stringify(products));
    }
  };

  return (
    <div className={style.details__item} key={product.id}>
      <img src={product.image} alt={product.name} />

      <div className={style.item__wrapper}>
        <h3>{product.name}</h3>
        <span>{product.price} ₽</span>
      </div>

      <div className={style['details__item--counter']}>
        <button
          className={style.counter__decrease}
          onClick={() => {
            counter.current.stepDown();
            if (product.amount > 1) {
              setTotalPrice(totalPrice - product.price);
              product.amount--;
              localStorage.setItem('products', JSON.stringify([...products]));
            }
          }}
        >
          -
        </button>
        <input type="number" name="counter" id="counter" min={1} defaultValue={product.amount} ref={counter} readOnly />
        <button
          className={style.counter__increase}
          onClick={() => {
            counter.current.stepUp();
            setTotalPrice(totalPrice + product.price);
            product.amount++;
            localStorage.setItem('products', JSON.stringify([...products]));
          }}
        >
          +
        </button>
      </div>

      <button className={style.delete} onClick={() => deleteProduct(product)}></button>
    </div>
  );
};
