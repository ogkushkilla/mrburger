import { useEffect, useState } from 'react';
import { Section } from '../../components/UI/Section/Section';
import style from './Cart.module.css';
import { CartItem } from './CartItem/CartItem';
import { Button } from '../../components/UI/Button/Button';
import { OrderModal } from '../Order/OrderModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../redux/thunks/fetchCart';

export const Cart = () => {
  const dispatch = useDispatch();
  const { items: products, status: cartStatus } = useSelector(state => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOrdered, setIsOrdered] = useState(false);

  useEffect(() => {
    if (cartStatus === 'idle') {
      dispatch(fetchCart());
    }

    let productsTotalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const additionals = products.map(product =>
      product.additionals.map(item => item.price).reduce((acc, price) => acc + price, 0),
    );

    if (additionals.length) {
      const additionalsPrice = additionals.reduce((acc, price) => acc + price, 0);
      productsTotalPrice += additionalsPrice;
    }

    setTotalPrice(productsTotalPrice);
  }, [products, cartStatus, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    setIsOrdered(true);
  };

  return (
    <>
      <Section title="Корзина">
        <div className={style.cart__wrapper}>
          <form className={style.cart__form} onSubmit={handleSubmit}>
            <h2 className={style.form__title}>Оформить заказ</h2>

            <div className={style.form__items}>
              <div className={style.form__item}>
                <label htmlFor="name" aria-required="true">
                  Введите Ваше имя
                </label>
                <input id="name" type="text" placeholder="Имя" autoComplete="false" required />
              </div>

              <div className={style.form__item}>
                <label htmlFor="phone" aria-required="true">
                  Введите Ваш номер телефона
                </label>
                <input id="phone" type="phone" placeholder="+7(9XX)-XXX-XX-XX" autoComplete="false" required />
              </div>

              <div className={style.form__item}>
                <label htmlFor="address" aria-required="true">
                  Введите адрес доставки
                </label>
                <input id="street" type="text" placeholder="Улица и дом" autoComplete="false" required />
                <div className={style.address}>
                  <input type="text" id="apartment" placeholder="Квартира" required />
                  <input type="text" id="housePhone" placeholder="Домофон" required />
                  <input type="text" id="entrance" placeholder="Подъезд" required />
                  <input type="text" id="floor" placeholder="Этаж" required />
                </div>
              </div>

              <div className={style.form__item}>
                <label htmlFor="comment" aria-required="false">
                  Комментарий к заказу
                </label>
                <textarea id="comment" placeholder="Комментарий" autoComplete="false" rows={5}></textarea>
              </div>

              <div className={`${style.form__item} ${style['form__item--checkbox']}`}>
                <input id="agreement" type="checkbox" />
                <label htmlFor="agreement" aria-required="true">
                  Я согласен(-сна) на обработку Персональных данных
                </label>
              </div>
            </div>

            <Button className={style.submit__button} type="submit">
              Отправить
            </Button>
          </form>

          <div className={style.cart__details}>
            <h2 className={style.details__title}>Ваш заказ</h2>

            <div className={style.details__items}>
              {products.length ? (
                products.map((product, _) => (
                  <CartItem key={product.id} product={product} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                ))
              ) : (
                <div>Корзина пуста</div>
              )}
            </div>

            <div className={style.total}>
              Итого: <span>{totalPrice} руб.</span>
            </div>
          </div>
        </div>
      </Section>
      {isOrdered && <OrderModal setIsOrdered={setIsOrdered} />}
    </>
  );
};
