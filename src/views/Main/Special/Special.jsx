import style from './Special.module.css';
import { Section } from '../../../components/UI/Section/Section';
import { SpecialItem } from './SpecialItem/SpecialItem';

export const Special = () => {
  const store = {
    specials: [
      {
        id: 1,
        image: 'img/special/1.jpg',
        title: 'Скидка 10% на всё меню до 14 октября',
        text: `В честь открытия нашей бургерной, первые две недели после открытия будет действовать особая акция,
        распростроняющаяся на всё меню, спешите попробовать и насладиться вкусной едой!`,
      },
      {
        id: 2,
        image: 'img/special/2.jpg',
        title: 'Скидка 30% во время праздников',
        text: `Праздники – время, которое хочется провести с близкими. Мы позаботились о том, чтобы ваш праздничный стол
        не отнял у вас много сил, и подготовили специальное предложение с блюдами на компанию, которые можно
        заказать накануне праздника со скидкой.`,
      },
    ],
  };

  return (
    <Section className={style.special} title="Акции в честь открытия">
      {store.specials.map((special, _) => (
        <SpecialItem key={special.id} special={special} />
      ))}
    </Section>
  );
};
