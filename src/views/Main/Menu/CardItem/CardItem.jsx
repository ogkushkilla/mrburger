import { useState } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import style from './CardItem.module.css';
import { Button } from '../../../../components/UI/Button/Button';
import { Modal } from '../../../../components/UI/Modal/Modal';

export const CardItem = ({ card }) => {
  const [visibility, setVisibility] = useState(false);
  const [type, setType] = useState('средний');
  const [price, setPrice] = useState(card.price);

  const handleClick = chosenType => {
    setType(chosenType);
    setPrice(card.price + 50);
  };

  const showModal = () => {
    setVisibility(true);
  };

  const hideModal = () => {
    setVisibility(false);
  };

  return (
    <div className={style.menu__card}>
      <img src={card.image} className={style.card__image} />
      <h3 className={style.card__title}>{card.name}</h3>
      <p className={style.card__text}>{card.composition}</p>
      <div className={style.card__choose}>
        <button
          onClick={e => handleClick(e.target.textContent)}
          className={`${style.choosen__type} ${type === 'средний' ? style.active : ''}`}
        >
          средний
        </button>
        <button
          onClick={e => handleClick(e.target.textContent)}
          className={`${style.choosen__type} ${type === 'большой' ? style.active : ''}`}
        >
          большой
        </button>
      </div>
      <div className={style.card__value}>
        <span className={style.card__price}>{price} ₽</span>
        <Button className={classnames('button', [style.card__button])} onClick={showModal}>
          Заказать
        </Button>
        {createPortal(
          <Modal data={card} visible={visibility} onClose={hideModal} type={type} price={price} />,
          document.body,
        )}
      </div>
    </div>
  );
};
