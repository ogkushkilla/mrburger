import { useEffect, useState } from 'react';
import { Section } from '../../components/UI/Section/Section';
import style from './Cart.module.css';
import { CartItem } from './CartItem/CartItem';
import { Button } from '../../components/UI/Button/Button';
import { OrderModal } from '../Order/OrderModal';

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOrdered, setIsOrdered] = useState(false);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    if (products.length) {
      const productsTotalPrice = products.reduce((acc, item) => acc + item.price * item.amount, 0);

      setProducts(products);
      setTotalPrice(productsTotalPrice);
    }
  }, []);

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
                  <CartItem
                    key={product.id}
                    products={products}
                    setProducts={setProducts}
                    product={product}
                    totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                  />
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
