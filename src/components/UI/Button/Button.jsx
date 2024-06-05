import style from './Button.module.css';

export const Button = props => {
  return <button className={`${style.button} ${props.className ? props.className : ''}`}>{props.children}</button>;
};
