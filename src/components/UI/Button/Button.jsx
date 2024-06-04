import style from './Button.module.css';

export const Button = props => {
  return props.className ? (
    <button className={`${style.button} ${props.className}`}>{props.children}</button>
  ) : (
    <button className={style.button}>{props.children}</button>
  );
};
