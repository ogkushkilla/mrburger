import { Button } from '../../../../components/UI/Button/Button';
import style from './FeatureItem.module.css';

export const FeatureItem = ({ feature }) => {
  return (
    <div className={style.features__card}>
      <img className={style['features__card--image']} src={feature.image} alt="first-feature" />
      <div className={style.card__content}>
        <h3 className={style['features__card--title']}>{feature.title}</h3>
        <p className={style['features__card--subtitle']}>{feature.subtitle}</p>
        <a href="#" className={style.features__link}>
          <Button className={style['features__card--button']}>Подробнее</Button>
        </a>
      </div>
    </div>
  );
};
