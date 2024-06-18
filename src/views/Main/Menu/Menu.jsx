import style from './Menu.module.css';
import { useCallback, useMemo, useState } from 'react';
import { store } from '../../../store/store';
import { Section } from '../../../components/UI/Section/Section';
import { Filter } from './Filter/Filter';
import { Cards } from './Cards/Cards';

export const Menu = () => {
  const [filter, setFilter] = useState('all');

  const getfilteredCards = (cards, curFilter = 'all') => {
    if (curFilter === 'all') return cards;

    return cards.filter(card => card.category === filter);
  };

  const filteredCards = useMemo(() => getfilteredCards(store.positions, filter), [filter]);

  const handleFilterUpdate = useCallback(newFilter => {
    setFilter(newFilter);
  }, []);

  return (
    <>
      <Section className={style.main__menu} title="Меню">
        <Filter filters={store.filters} updateFilter={handleFilterUpdate} />
        <Cards cards={filteredCards} />
      </Section>
    </>
  );
};
