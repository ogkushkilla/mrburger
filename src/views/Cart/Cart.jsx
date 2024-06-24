import { useRef } from 'react';
import { Section } from '../../components/UI/Section/Section';
import style from './Cart.module.css';

export const Cart = () => {
  const products = JSON.parse(localStorage.getItem('products'));
  const counter = useRef();
  let productPrice = 0;

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
            {products.map((product, _) => {
              productPrice += product.price;

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
                          product.amount--;
                        }
                      }}
                    >
                      -
                    </button>
                    <input type="number" name="counter" id="counter" min={1} defaultValue={1} ref={counter} />
                    <button
                      className={style.counter__increase}
                      onClick={() => {
                        counter.current.stepUp();
                        product.amount++;
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button className={style.delete}></button>
                </div>
              );
            })}
          </div>

          <div className={style.total}>
            Итого: <span>{productPrice} руб.</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
