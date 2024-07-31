import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { useEffect } from 'react';
import { fetchCategories } from '../../../../redux/thunks/fetchCategories';
import { changeCategory } from '../../../../redux/slices/categoriesSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { categories, status: categoriesStatus, activeCategory } = useSelector(state => state.categories);

  useEffect(() => {
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [categoriesStatus, dispatch]);

  return (
    <nav className={style.filter__nav}>
      <ul className={style.filter__wrapper}>
        {categories.length ? (
          categories.map((category, i) => (
            <li key={i} className={style.filter__item}>
              <button
                className={`${activeCategory === i ? style.active : ''} ${style.filter__button}`}
                onClick={() => dispatch(changeCategory({ indexCategory: i }))}
              >
                {category.rus.toLowerCase()}
              </button>
            </li>
          ))
        ) : (
          <div>Загрузка...</div>
        )}
      </ul>
    </nav>
  );
};
