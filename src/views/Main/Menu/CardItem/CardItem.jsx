import { useState } from 'react';
import classnames from 'classnames';
import style from './CardItem.module.css';
import { Button } from '../../../../components/UI/Button/Button';

export const CardItem = ({ card }) => {
  const [isActive, setActive] = useState({ type: 'средний' });

  const handleClick = chosenType => {
    setActive({ type: chosenType });
  };

  return (
    <div className={style.menu__card}>
      <img src={card.image} className={style.card__image} />
      <h3 className={style.card__title}>{card.name}</h3>
      <p className={style.card__text}>{card.composition}</p>
      <div className={style.card__choose}>
        <button
          onClick={e => handleClick(e.target.textContent)}
          className={`${style.choosen__type} ${isActive && isActive.type === 'средний' ? style.active : ''}`}
        >
          средний
        </button>
        <button
          onClick={e => handleClick(e.target.textContent)}
          className={`${style.choosen__type} ${isActive && isActive.type === 'большой' ? style.active : ''}`}
        >
          большой
        </button>
      </div>
      <div className={style.card__value}>
        <span className={style.card__price}>
          {isActive && isActive.type === 'средний' ? card.price : card.price + 50} ₽
        </span>
        <Button className={classnames('button', [style.card__button])}>Заказать</Button>
      </div>
    </div>
  );
};
