import { useState } from 'react';
import style from './CardItem.module.css';
import { Button } from '../../../../components/UI/Button/Button';
import { Modal } from '../../../Modal/Modal';

export const CardItem = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('средний');

  const handleClick = chosenType => {
    setType(chosenType);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.menu__card}>
      <img src={product.image} className={style.card__image} />
      <h3 className={style.card__title}>{product.title}</h3>
      <p className={style.card__text}>{product.description}</p>
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
        <span className={style.card__price}>{type === 'средний' ? product.price : product.extraPrice} ₽</span>
        {/* {isAddedToCart ? (
          <div className={style.product__params}>
            <Button className={style.decrease}>-</Button>
            {productAmount}
            <Button className={style.increase}>+</Button>
          </div>
        ) : (
          <Button className={style.card__button} onClick={openModal}>
            Заказать
          </Button>
        )} */}
        <Button className={style.card__button} onClick={openModal}>
          Заказать
        </Button>
      </div>
      {isModalOpen && (
        <Modal
          product={product}
          closeModal={closeModal}
          type={type}
          price={type === 'средний' ? product.price : product.extraPrice}
        />
      )}
    </div>
  );
};
