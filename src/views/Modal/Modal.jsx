import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import classnames from 'classnames';
import { Checkbox } from '../../components/UI/Checkbox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/thunks/addItemToCart';
import { fetchAdditionals } from '../../redux/thunks/fetchAdditionals';

export const Modal = ({ product, closeModal, type, price }) => {
  const dispatch = useDispatch();
  const { items: additionals, status: additionalsStatus } = useSelector(state => state.additionals);
  const [currentPrice, setCurrentPrice] = useState(price);
  const [checkedAdditionals, setCheckedAdditionals] = useState([]);
  const popupRef = useRef(null);

  useEffect(() => {
    if (additionalsStatus === 'idle') {
      dispatch(fetchAdditionals());
    }
  }, [additionalsStatus, dispatch]);

  const handleClick = e => {
    const target = e.target;

    if (target === popupRef.current) {
      closeModal();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addItemToCart({ id: product.id, type, quantity: 1, additionals: checkedAdditionals }));
    closeModal();
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
          <h1 className={style.popup__title}>Вы выбрали</h1>
          <span className={style.close} onClick={() => closeModal()}>
            &times;
          </span>
          <img className={style.popup__image} src={product.image} alt="order" />
          <h2 className={classnames([style.order__title], style['order__product--title'])}>{product.title}</h2>
          <span className={classnames([style.order__price], style['order__product--price'])}>{currentPrice} ₽</span>
          <span className={style.order__type}>
            {type}, {type === 'средний' ? product.weight : product.extraWeight}г.
          </span>
          <div className={style.order__composition}>{product.ingredients.join(', ')}</div>
        </div>
        <div className={style.popup__body}>
          <form onSubmit={e => handleSubmit(e)}>
            <input className={style['order__info--title']} type="hidden" name="бургер" />
            <input className={style['order__info--price']} type="hidden" name="цена" />
            <input className={style['order__info--size']} type="hidden" name="размер" />
            <span className={style.energy__titile}>На 100 грамм:</span>
            <div className={style.energy__info}>
              <div className={style.info__item}>
                <div className={style.item__value}>{product.energyValues.calories}</div>
                <div className={style.item__name}>ккал</div>
              </div>
              <div className={style.info__item}>
                <div className={style.item__value}>{product.energyValues.proteins}г</div>
                <div className={style.item__name}>белки</div>
              </div>
              <div className={style.info__item}>
                <div className={style.item__value}>{product.energyValues.fats}г</div>
                <div className={style.item__name}>жиры</div>
              </div>
              <div className={style.info__item}>
                <div className={style.item__value}>{product.energyValues.carbohydrates}г</div>
                <div className={style.item__name}>углеводы</div>
              </div>
            </div>
            <div className={style.additional__info}>
              <h3>Дополнительно:</h3>
              {additionals.length ? (
                additionals.map(product => (
                  <Checkbox
                    key={product.id}
                    id={product.id}
                    className={style.info__item}
                    productTitle={`${product.title} (${product.weight}г)`}
                    weight={product.weight}
                    price={product.price}
                    productPrice={currentPrice}
                    setCurrentPrice={setCurrentPrice}
                    checkedAdditionals={checkedAdditionals}
                    setCheckedAdditionals={setCheckedAdditionals}
                  />
                ))
              ) : (
                <div>Загрузка...</div>
              )}
            </div>
            <input className={style.order__button} type="submit" value="Добавить в корзину" />
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modalRoot'),
  );
};
