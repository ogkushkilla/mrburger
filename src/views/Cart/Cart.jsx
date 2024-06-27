import { useEffect, useState } from 'react';
import { Section } from '../../components/UI/Section/Section';
import style from './Cart.module.css';
import { CartItem } from './CartItem/CartItem';

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    if (products.length) {
      const productsPrices = products.reduce((acc, item) => acc + item.price * item.amount, 0);

      setProducts(products);
      setTotalPrice(productsPrices);
    }
  }, []);

  return (
    <Section title="Корзина">
      <div className={style.cart__wrapper}>
        <form className={style.cart__form}>
          <h2 className={style.form__title}>Заполните форму</h2>

          <div className={style.form__items}>
            <div className={style.form__item}>
              <label htmlFor="name">Введите Ваше имя</label>
              <input id="name" type="text" placeholder="Имя" autoComplete="false" />
            </div>

            <div className={style.form__item}>
              <label htmlFor="phone">Введите Ваш номер телефона</label>
              <input id="phone" type="phone" placeholder="+7(9XX)-XXX-XX-XX" autoComplete="false" />
            </div>

            <div className={style.form__item}>
              <label htmlFor="address">Введите адрес доставки</label>
              <input id="address" type="text" placeholder="Адрес" autoComplete="false" />
            </div>

            <div className={`${style.form__item} ${style['form__item--checkbox']}`}>
              <input id="agreement" type="checkbox" />
              <label htmlFor="agreement">Я согласен(-сна) на обработку Персональных данных</label>
            </div>
          </div>
        </form>

        <div className={style.cart__details}>
          <h2 className={style.details__title}>Ваш заказ</h2>

          <div className={style.details__items}>
            {products.length ? (
              products.map((product, _) => (
                <CartItem
                  key={product.id}
                  products={products}
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
  );
};
