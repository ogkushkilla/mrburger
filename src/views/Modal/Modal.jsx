import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import classnames from 'classnames';

export const Modal = ({ product, closeModal, type, price }) => {
  const popupRef = useRef(null);

  const handleClick = e => {
    const target = e.target;

    if (target === popupRef.current) {
      closeModal();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem('products')) || [];
    const currentProduct = products.find(item => item.id === product.id);

    if (currentProduct) {
      currentProduct.amount += 1;
    } else {
      products.push({ ...product, price, amount: 1 });
    }

    localStorage.setItem('products', JSON.stringify(products));
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return createPortal(
    <div className={style.popup} ref={popupRef}>
      <div className={style.popup__block}>
        <div className={style.popup__header}>
          <h1 className={style.popup__title}>Заполните форму</h1>
          <span className={style.close} onClick={() => closeModal()}>
            &times;
          </span>
          <img className={style.popup__image} src={product.image} alt="order" />
          <h2 className={classnames([style.order__title], style['order__product--title'])}>{product.name}</h2>
          <span className={classnames([style.order__price], style['order__product--price'])}>{price} ₽</span>
          <span className={style.order__type}>{type}</span>
        </div>
        <div className={style.popup__body}>
          <form className={`${style.form} ${style.order__form}`} onSubmit={e => handleSubmit(e)}>
            <input className={style['order__info--title']} type="hidden" name="бургер" />
            <input className={style['order__info--price']} type="hidden" name="цена" />
            <input className={style['order__info--size']} type="hidden" name="размер" />
            <input
              className={`${style.input} ${style.order__name}`}
              type="text"
              name="name"
              id="name"
              placeholder="Ваше имя"
            />
            <input
              className={`${style.input} ${style.order__phone}`}
              type="tel"
              name="phone"
              id="phone"
              placeholder="Ваш телефон"
            />
            <input
              className={`${style.input} ${style.order__address}`}
              type="text"
              name="address"
              id="address"
              placeholder="Ваш адресс"
            />
            <select name="pay" id="pay" className={`${style.input} ${style.order__pay}`}>
              <option disabled defaultValue>
                Способ оплаты
              </option>
              <option value="cash">Наличными</option>
              <option value="bank">Банковской картой</option>
            </select>
            <textarea
              name="comment"
              id="comment"
              className={style.order__comment}
              placeholder="Комментарий к заказу"
            ></textarea>
            <input className={style.order__button} type="submit" value="Добавить в корзину" />
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modalRoot'),
  );
};
