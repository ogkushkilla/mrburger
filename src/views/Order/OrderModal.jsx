import { useSelector } from 'react-redux';
import { Button } from '../../components/UI/Button/Button';
import style from './OrderModal.module.css';

export const OrderModal = ({ setIsOrdered }) => {
  const orderId = useSelector(state => state.order.data.orderId);

  return (
    <div className={style.modal__wrapper}>
      <div className={style.modal__content}>
        <div className={style.content__items}>
          <div className={style.content__item}>
            <h2 className={style.item__title}>Заказ {`'${orderId}'`} оформлен!</h2>
            <p className={style.item__description}>
              Ваш заказ успешно оформлен, через пару минут с Вами свяжется оператор для подтверждения заказа, затем он
              немедленно поступит в работу.
              <span className={style.special__text}>Спасибо, что выбрали нас!</span>
            </p>
          </div>
        </div>
        <Button className={style.ok__button} onClick={() => setIsOrdered(false)}>
          Понятно
        </Button>
      </div>
    </div>
  );
};
