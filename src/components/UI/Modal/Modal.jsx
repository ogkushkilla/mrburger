import style from './Modal.module.css';
import classnames from 'classnames';

export const Modal = ({ data, visible, onClose, type, price }) => {
  return (
    <div className={classnames([style.popup], { [style['popup--active']]: visible })}>
      <div className={style.popup__block}>
        <div className={style.popup__header}>
          <h1 className={style.popup__title}>Заполните форму</h1>
          <span className={style.close} onClick={() => onClose()}>
            &times;
          </span>
          <img className={style.popup__image} src={data.image} alt="order" />
          <h2 className={classnames([style.order__title], style['order__product--title'])}>{data.name}</h2>
          <span className={classnames([style.order__price], style['order__product--price'])}>{price} ₽</span>
          <span className={style.order__type}>{type}</span>
        </div>
        <div className={style.popup__body}>
          <form action="#" className={`${style.form} ${style.order__form}`}>
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
            <input className={style.order__button} type="submit" value="Отправить" />
          </form>
        </div>
      </div>
    </div>
  );
};
