import style from './Introdution.module.css';
import { Section } from '../../../components/UI/Section/Section';

export const Introdution = () => {
  return (
    <Section className={style.about} title="Давайте знакомиться">
      <div className={style.about__block}>
        <div className={style.about__content}>
          <p className={style.about__text}>
            Наша бургерная открыла двери для посетителей в городе Екатеринбурге! Мы гордимся тем что нам удалось стать
            первыми в городе. Всё потому, что мы используем только качественные ингредиенты для наших бургеров. А наши
            опытные повара вкладывают в них частичку своей души, чтобы гости нашей бургерной выходили от нас не только
            сытыми, но и с хорошим настроением. Мы ждем Вас, приходите с семьей, друзьями и попробуйте наши бургеры!
            <br />
            <br />
            Вы не могли не заметить, что мы специализируемся на острых бургерах. Да, мы любим чили перец и его полезные
            свойства. Но также мы рады предложить вам классические бургеры, вегетарианские и с морепродуктами. Мы
            гарантируем, что никто не уйдет от нас голодным!
          </p>
        </div>
        <div className={style.about__image}>
          <img className={style.about__img} src="img/about-bg.jpg" alt="" />
        </div>
      </div>
    </Section>
  );
};
