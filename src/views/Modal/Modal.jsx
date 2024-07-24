import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import classnames from 'classnames';

export const Modal = ({ product, closeModal, setProductAmount, setIsAddedToCart, type, price }) => {
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
    const currentProduct = products.find(item => item.id === product.id && item.type === type);

    if (currentProduct) {
      currentProduct.amount += 1;
      setProductAmount(currentProduct.amount);
    } else {
      products.push({ ...product, type, price, amount: 1 });
      setProductAmount(1);
    }

    localStorage.setItem('products', JSON.stringify(products));

    closeModal();
    setIsAddedToCart(true);
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
          <div className={style.order__composition}>{product.composition}</div>
        </div>
        <div className={style.popup__body}>
          <form onSubmit={e => handleSubmit(e)}>
            <input className={style['order__info--title']} type="hidden" name="бургер" />
            <input className={style['order__info--price']} type="hidden" name="цена" />
            <input className={style['order__info--size']} type="hidden" name="размер" />
            <div className={style.energy__info}>
              <div className={style.info__item}>
                <div className={style.item__value}>999</div>
                <div className={style.item__name}>ккал</div>
              </div>
              <div className={style.info__item}>
                <div className={style.item__value}>9г</div>
                <div className={style.item__name}>белки</div>
              </div>
              <div className={style.info__item}>
                <div className={style.item__value}>9г</div>
                <div className={style.item__name}>жиры</div>
              </div>
              <div className={style.info__item}>
                <div className={style.item__value}>99г</div>
                <div className={style.item__name}>углеводы</div>
              </div>
            </div>
            <div className={style.additional__info}>
              <h3>Дополнительно:</h3>
              <div className={style.info__item}>
                <input type="checkbox" id="option1" />
                <label htmlFor="option1">
                  Картошка фри (150г)<span className={style.price}>+130₽</span>
                </label>
              </div>
              <div className={style.info__item}>
                <input type="checkbox" id="option2" />
                <label htmlFor="option2">
                  Соус сырный (50г)<span className={style.price}>+50₽</span>
                </label>
              </div>
              <div className={style.info__item}>
                <input type="checkbox" id="option3" />
                <label htmlFor="option3">
                  Халапенью (50г)<span className={style.price}>+70₽</span>
                </label>
              </div>
            </div>
            <input className={style.order__button} type="submit" value="Добавить в корзину" />
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modalRoot'),
  );
};
