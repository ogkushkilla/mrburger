import classNames from 'classnames';
import style from './Hero.module.css';
import { Container } from '../../Container/Container';
import { Button } from '../../../components/UI/Button/Button';

export const Hero = () => {
  const buttonClass = classNames(style.hero__button, 'button');

  return (
    <div className={style.hero}>
      <div className={style.hero__bg}></div>
      <Container>
        <div className={style.hero__content}>
          <span className={style.hero__suptitle}>Выбери свой бургер</span>
          <h1 className={style.hero__title}>
            Убийственно вкусные
            <br />
            бургеры в Екатеринбурге
          </h1>
          <a className="anchor" href="#menu">
            <Button className={buttonClass}>Хочу бургер</Button>
          </a>
        </div>
      </Container>
    </div>
  );
};
