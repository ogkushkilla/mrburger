import { useEffect, useState } from 'react';
import { Section } from '../../components/UI/Section/Section';
import style from './Cart.module.css';
import { CartItem } from './CartItem/CartItem';
import { Button } from '../../components/UI/Button/Button';
import { OrderModal } from '../Order/OrderModal';
import { useDispatch, useSelector } from 'react-redux';
import { sendOrder } from '../../redux/thunks/sendOrder';

export const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.items);
  const { status: orderStatus } = useSelector(state => state.order);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    let productsTotalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const additionals = products.map(product =>
      product.additionals.map(item => item.price).reduce((acc, price) => acc + price, 0),
    );

    if (additionals.length) {
      const additionalsPrice = additionals.reduce((acc, price) => acc + price, 0);
      productsTotalPrice += additionalsPrice;
    }

    setTotalPrice(productsTotalPrice);
  }, [products, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(sendOrder({ ...orderData, products }));
    if (orderStatus === 'success') {
      setIsOrdered(true);
    }
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
                <input
                  id="name"
                  type="text"
                  placeholder="Имя"
                  autoComplete="false"
                  required
                  onChange={e => setOrderData({ ...orderData, name: e.target.value })}
                />
              </div>

              <div className={style.form__item}>
                <label htmlFor="phone" aria-required="true">
                  Введите Ваш номер телефона
                </label>
                <input
                  id="phone"
                  type="phone"
                  placeholder="+7(9XX)-XXX-XX-XX"
                  autoComplete="false"
                  required
                  onChange={e => setOrderData({ ...orderData, phone: e.target.value })}
                />
              </div>

              <div className={style.form__item}>
                <label htmlFor="address" aria-required="true">
                  Введите адрес доставки
                </label>
                <input
                  id="street"
                  type="text"
                  placeholder="Улица и дом"
                  autoComplete="false"
                  required
                  onChange={e => setOrderData({ ...orderData, street: e.target.value })}
                />
                <div className={style.address}>
                  <input
                    type="text"
                    id="apartment"
                    placeholder="Квартира"
                    required
                    onChange={e => setOrderData({ ...orderData, apartment: e.target.value })}
                  />
                  <input
                    type="text"
                    id="housePhone"
                    placeholder="Домофон"
                    required
                    onChange={e => setOrderData({ ...orderData, housePhone: e.target.value })}
                  />
                  <input
                    type="text"
                    id="entrance"
                    placeholder="Подъезд"
                    required
                    onChange={e => setOrderData({ ...orderData, entrance: e.target.value })}
                  />
                  <input
                    type="text"
                    id="floor"
                    placeholder="Этаж"
                    required
                    onChange={e => setOrderData({ ...orderData, floor: e.target.value })}
                  />
                </div>
              </div>

              <div className={style.form__item}>
                <label htmlFor="comment" aria-required="false">
                  Комментарий к заказу
                </label>
                <textarea
                  id="comment"
                  placeholder="Комментарий"
                  autoComplete="false"
                  rows={5}
                  onChange={e => setOrderData({ ...orderData, comment: e.target.value })}
                ></textarea>
              </div>

              <div className={`${style.form__item} ${style['form__item--checkbox']}`}>
                <input id="agreement" type="checkbox" />
                <label htmlFor="agreement" aria-required="true">
                  Я согласен(-сна) на обработку Персональных данных
                </label>
              </div>
            </div>

            <Button
              className={style.submit__button}
              type="submit"
              disabled={products.length || orderStatus === 'loading' ? '' : 'disabled'}
            >
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
                <div className={style.cart__empty}>
                  <img src="/img/empty-cart.svg" alt="Корзина пуста" />
                  <span>{'Вы ничего не добавили в корзину :('}</span>
                </div>
              )}
            </div>

            {products.length ? (
              <div className={style.total}>
                Итого: <span>{totalPrice} руб.</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Section>
      {isOrdered && <OrderModal setIsOrdered={setIsOrdered} />}
    </>
  );
};
