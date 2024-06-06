import { Section } from '../../../components/UI/Section/Section';
import { FeatureItem } from './FeatureItem/FeatureItem';
import style from './Features.module.css';

export const Features = () => {
  const store = {
    features: [
      {
        id: 1,
        image: 'img/features/1.jpg',
        title: '100% свежее мясо',
        subtitle: 'Мы закупаем мясо напрямую только у проверенных поставщиков',
      },
      {
        id: 2,
        image: 'img/features/2.jpg',
        title: 'Ручная сборка',
        subtitle: 'Квалифицированный персонал готовит блюда быстро и качественно',
      },
      {
        id: 3,
        image: 'img/features/3.jpg',
        title: 'Натуральные ингредиенты',
        subtitle: 'Только свежая натуральная зелень и овощи без искуственных добавок',
      },
    ],
  };

  return (
    <Section className={style.features} title="Почему мы?">
      <div className={style.features__cards}>
        {store.features.map((feature, _) => (
          <FeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </Section>
  );
};
