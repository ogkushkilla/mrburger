import classnames from 'classnames';
import style from './Filter.module.css';
import { useState } from 'react';

export const Filter = () => {
  const store = {
    filters: ['все', 'острые', 'мясные', 'веган'],
  };
  const [isActive, setActive] = useState('все');

  return (
    <nav className={style.filter__nav}>
      <ul className={style.filter__wrapper}>
        {store.filters.map((filter, i) => (
          <li key={i} className={style.filter__item}>
            <button
              className={classnames(style.filter__button, {
                [style.active]: isActive === filter,
              })}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
