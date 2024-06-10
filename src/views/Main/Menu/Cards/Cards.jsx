import style from './Cards.module.css';
import { CardItem } from '../CardItem/CardItem';
import { useState } from 'react';

export const Cards = () => {
  const [state] = useState({
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
  });

  return (
    <div className={style.menu__cards}>
      {state.positions.map((card, _) => (
        <CardItem card={card} key={card.id} />
      ))}
    </div>
  );
};
