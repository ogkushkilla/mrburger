import { Button } from '../../../../components/UI/Button/Button';
import style from './SpecialItem.module.css';

export const SpecialItem = ({ special }) => {
  return (
    <div className={style.special__card}>
      <img className={style['special__card--image']} src={special.image} alt="first-special" />
      <div className={style['special__card--content']}>
        <h3 className={style['special__card--title']}>{special.title}</h3>
        <p className={style['special__card--text']}>{special.text}</p>
        <a href="#" className={style.special__link}>
          <Button className={style['special__card--button']}>Подробнее</Button>
        </a>
      </div>
    </div>
  );
};
