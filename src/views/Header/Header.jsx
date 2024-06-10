import { Logo } from '../../components/Logo/Logo';
import { Container } from '../../views/Container/Container';
import style from './Header.module.css';

export const Header = () => {
  const smoothScroll = (event, link) => {
    event.preventDefault();
    let linkId = link.getAttribute('href');
    console.log(linkId);
    if (linkId === undefined || linkId === null) {
      linkId = link.dataset.section;
    }
    document.querySelector(linkId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <header className={style.header}>
      <div className={style.menu}>
        <Container>
          <nav className={style.navbar}>
            <div className={style.navbar__block}>
              <div className={style.navbar__logo}>
                <Logo />
              </div>
              <div className={style.navbar__menu}>
                <a href="#about" className={style.navbar__link} onClick={e => smoothScroll(e, e.target)}>
                  О нас
                </a>
                <a href="#menu" className={style.navbar__link} onClick={e => smoothScroll(e, e.target)}>
                  Меню
                </a>
                <a href="#special" className={style.navbar__link} onClick={e => smoothScroll(e, e.target)}>
                  Акции
                </a>
                <a href="#contacts" className={style.navbar__link} onClick={e => smoothScroll(e, e.target)}>
                  Контакты
                </a>
                <a href="tel:+79999999999" className={style.navbar__phone}>
                  +7-(999)-999-99-99
                </a>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};
