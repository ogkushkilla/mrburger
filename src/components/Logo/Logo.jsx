import { Link } from 'react-router-dom';
import style from './Logo.module.css';

export const Logo = () => {
  return (
    <Link to="/">
      <img className={style.logo} src="/img/logo.png" alt="Логотип ресторана Mr.Burger" />
    </Link>
  );
};
