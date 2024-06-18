import style from './Cards.module.css';
import { CardItem } from '../CardItem/CardItem';

export const Cards = ({ cards }) => {
  return (
    <div className={style.menu__cards}>
      {cards.map((card, _) => (
        <CardItem card={card} key={card.id} />
      ))}
    </div>
  );
};
