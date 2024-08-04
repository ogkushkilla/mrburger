import { useRef } from 'react';
import style from './CartItem.module.css';
import { addItemToCart } from '../../../redux/thunks/addItemToCart';
import { useDispatch } from 'react-redux';

export const CartItem = ({ product, totalPrice, setTotalPrice }) => {
  const dispatch = useDispatch();
  const counter = useRef(null);

  return (
    <div className={style.details__wrapper} key={product.id}>
      <div className={style.details__item}>
        <img src={product.image} alt={product.name} />

        <div className={style.item__wrapper}>
          <h3>{product.title}</h3>
          <p>
            {product.type}, {product.weight}г
          </p>
          <span>{product.price} ₽</span>
        </div>

        <div className={style['details__item--counter']}>
          <button
            className={style.counter__decrease}
            onClick={() => {
              counter.current.stepDown();
              if (product.quantity > 1) {
                setTotalPrice(totalPrice - product.price);
                dispatch(
                  addItemToCart({
                    id: product.id,
                    type: product.type,
                    quantity: product.quantity - 1,
                  }),
                );
              }
            }}
          >
            -
          </button>
          <input
            type="number"
            name="counter"
            id="counter"
            min={1}
            defaultValue={product.quantity}
            ref={counter}
            readOnly
          />
          <button
            className={style.counter__increase}
            onClick={() => {
              counter.current.stepUp();
              setTotalPrice(totalPrice + product.price);
              dispatch(
                addItemToCart({
                  id: product.id,
                  type: product.type,
                  quantity: product.quantity + 1,
                }),
              );
            }}
          >
            +
          </button>
        </div>

        <button
          className={style.delete}
          onClick={() =>
            dispatch(
              addItemToCart({
                id: product.id,
                type: product.type,
                quantity: 0,
              }),
            )
          }
        ></button>
      </div>

      {product.additionals ? (
        <div className={style.additionals}>
          {product.additionals.map(product => (
            <div key={product.id} className={style.additionals__item}>
              <span>{product.title}</span>
              <span className={style.item__price}>{product.price} ₽</span>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
