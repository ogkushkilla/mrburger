import { Button } from '../../../components/UI/Button/Button';
import { Section } from '../../../components/UI/Section/Section';
import style from './Delivery.module.css';

export const Delivery = ({ handler }) => {
  return (
    <Section className={style.delivery}>
      <div className={style.delivery__block}>
        <div className={style.delivery__image}>
          <img className={style.delivery__img} src="img/delivery.jpg" alt="delivery" />
        </div>
        <div className={style.delivery__content}>
          <h2 className={style.delivery__title}>Доставка осуществляется с 9:00 до 23:00</h2>
          <p className={style.delivery__subtitle}>
            все заказы поступившие раньше или позже указанного времени - доставляются в эти часы
          </p>
          <Button data-section="#menu" className={style.delivery__button} onClick={handler}>
            Сделать заказ
          </Button>
        </div>
      </div>
    </Section>
  );
};
