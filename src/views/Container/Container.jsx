import style from './Container.module.css';

export const Container = props => {
  return <div className={style.container}>{props.children}</div>;
};
