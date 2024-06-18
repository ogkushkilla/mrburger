import classnames from 'classnames';
import style from './Filter.module.css';
import { useState } from 'react';

export const Filter = ({ filters, updateFilter }) => {
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleClick = filterCategory => {
    setCurrentFilter(filterCategory);
    updateFilter(filterCategory);
  };

  return (
    <nav className={style.filter__nav}>
      <ul className={style.filter__wrapper}>
        {filters.map((filter, i) => (
          <li key={i} className={style.filter__item}>
            <button
              className={classnames(style.filter__button, {
                [style.active]: currentFilter === filter.category,
              })}
              onClick={() => handleClick(filter.category)}
            >
              {filter.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
