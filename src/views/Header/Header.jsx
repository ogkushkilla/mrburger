import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import { Container } from '../../components/Container/Container';
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

  const [counter] = useState(0);

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
                <Link to={`/cart`} className={style.navbar__cart}>
                  <img className={style.cart__image} src="/img/cart.svg" alt="Корзина" />
                  <span
                    className={style.cart__counter}
                    style={counter === 0 ? { display: 'none' } : { display: 'flex' }}
                  >
                    {counter}
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};
