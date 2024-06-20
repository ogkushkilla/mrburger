import style from './Footer.module.css';
import { Container } from '../../components/Container/Container';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footer__block}>
          <div className={style.footer__main}>
            <h2 className={style.footer__title}>Mr.Burger</h2>
            <p className={style.footer__subtitle}>Убиственно вкусные бургеры в Екатеринбурге</p>
            <span className={style.footer__copyright}>© Mr.Burger</span>
          </div>
          <div className={style.footer__info}>
            <a href="tel:+79999999999" className={style.footer__email}>
              Телефон: +7 (999) 999-99-99
            </a>
            <a href="mailto:inbox@yandex.ru" className={style.footer__email}>
              E-mail: inbox@yandex.ru
            </a>
            <span className={style.footer__date}>Все права защищены, 2024г.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
