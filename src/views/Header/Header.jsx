import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import { Container } from '../../components/Container/Container';
import style from './Header.module.css';
import { useSelector } from 'react-redux';

export const Header = ({ isEmpty, hideCart }) => {
  const cartItemsCount = useSelector(state => state.cart.items).length;
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
                {!isEmpty && (
                  <>
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
                  </>
                )}
                {!hideCart && (
                  <Link to={`/cart`} className={style.navbar__cart}>
                    <img className={style.cart__image} src="/img/cart.svg" alt="Корзина" />
                    <span
                      className={style.cart__counter}
                      style={cartItemsCount === 0 ? { display: 'none' } : { display: 'flex' }}
                    >
                      {cartItemsCount}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};
