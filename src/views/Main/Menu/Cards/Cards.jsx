import { useState } from 'react';
import classnames from 'classnames';
import style from './Cards.module.css';
import { Button } from '../../../../components/UI/Button/Button';

export const Cards = () => {
  const [isActive, setActive] = useState('средний');
  const store = {
    positions: [
      {
        id: 1,
        category: 'meat',
        image: 'img/cards/1.png',
        name: 'Бургер классический',
        composition: 'Говяжья котлета, листья салата, помидоры, моцарелла, лук, огурцы маринованные, томатный соус',
        price: 199,
      },
      {
        id: 2,
        category: 'meat',
        image: 'img/cards/2.png',
        name: 'Бургер Фирменный',
        composition: `Говяжья котлета, листья салата, помидоры, моцарелла,
        огурцы маринованные, французский соус, картофельные чипсы`,
        price: 279,
      },
      {
        id: 3,
        category: 'meat',
        image: 'img/cards/3.png',
        name: 'Бургер “Ципленок”',
        composition: `Куриное филе, листья салата, помидоры, бекон, огурцы маринованные, соус тар-тар`,
        price: 259,
      },
      {
        id: 4,
        category: 'spicy',
        image: 'img/cards/4.png',
        name: 'Чили-бургер',
        composition: `Говяжья котлета, листья салата, помидоры, сыр Дор-блю,
        огурцы свежие, чили соус, горчица, красный лук, бекон`,
        price: 249,
      },
      {
        id: 5,
        category: 'spicy',
        image: 'img/cards/5.png',
        name: 'Бургер “Двойной удар”',
        composition: `Двойная говяжья котлета, листья салата, помидоры, моцарелла,
        сыр чеддер огурцы свежие, бекон, красный лук, горчичный соус`,
        price: 349,
      },
      {
        id: 6,
        category: 'vegan',
        image: 'img/cards/6.png',
        name: 'Веган-бургер',
        composition: `Овощная котлета, листья салата, помидоры, сыр чеддер, огурцы свежие, французский соус, лук`,
        price: 179,
      },
    ],
    types: ['средний', 'большой'],
  };

  return (
    <div className={style.menu__cards}>
      {store.positions.map((card, i) => (
        <div key={i} className={style.menu__card}>
          <img src={card.image} className="card__image" />
          <h3 className={style.card__title}>{card.name}</h3>
          <p className={style.card__text}>{card.composition}</p>
          <div className={style.card__choose}>
            {store.types.map((type, i) => (
              <button
                key={i}
                className={classnames(style.choosen__type, {
                  [style.active]: isActive === type,
                })}
                onClick={() => setActive(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className={style.card__value}>
            <span className={style.card__price}>{isActive === store.types[0] ? card.price : card.price + 50} ₽</span>
            <Button className={classnames('button', [style.card__button])}>Заказать</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
