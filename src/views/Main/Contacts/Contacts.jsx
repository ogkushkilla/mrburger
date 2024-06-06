import { useEffect } from 'react';
import style from './Contacts.module.css';
import { Section } from '../../../components/UI/Section/Section';

export const Contacts = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A969da39d79661a31191a428495476a41e2d0e5982b38df6d52cc1c23c8a983d1&amp;width=600&amp;height=425&amp;lang=ru_RU&amp;scroll=false';
    script.async = true;

    document.querySelector(`#map`).appendChild(script);

    return () => {
      document.querySelector(`#map`).removeChild(document.querySelector('iframe'));
    };
  }, []);

  return (
    <Section className={style.contacts} title="Ждем вас в гости">
      <div className={style.contacts__block}>
        <div className={style.contacts__content}>
          {
            /*
            TODO: Подгрузка информации из store
            */
          }
          <address className={style.contacts__address}>
            Адрес: г. Екатеринбург ул. 8 марта, дом 46 (ТРЦ Гринвич)
          </address>
          <a href="mailto:inbox@yandex.ru" className={style.contacts__email}>
            E-mail: inbox@yandex.ru
          </a>
          <a href="tel:+79999999999" className={style.contacts__email}>
            Телефон: +7 (999) 999-99-99
          </a>
          <p className={style.contacts__hours}>
            Часы работы:
            <br />
            пн-пт: 9:00-23:00
            <br />
            сб-вс: 11:00-22:00
          </p>
          <div className={style.contacts__socials}>
            <a href="#" className={style.social__link}>
              <img src="img/socials/1.png" alt="vk" />
            </a>
            <a href="#" className={style.social__link}>
              <img src="img/socials/2.png" alt="instagram" />
            </a>
          </div>
        </div>
        <div id="map" className={style.contacts__map}></div>
      </div>
      <div className={style.contacts__form}>
        <h3 className={style.form__title}>Будьте в курсе всех новинок</h3>
        <p className={style.form__subtitle}>Оставьте нам свой e-mail чтобы быть в курсе всех новостей</p>
        <form action="#" className={style.form}>
          <input className={style.form__email} type="email" name="email" id="email" placeholder="Ваш e-mail:" />
          <input className={style.form__button} type="submit" value={String.fromCharCode(0x2192)} />
        </form>
      </div>
    </Section>
  );
};
