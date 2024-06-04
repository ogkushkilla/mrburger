import style from './Menu.module.css';
import { Section } from '../../../components/UI/Section/Section';
import { Filter } from './Filter/Filter';
import { Cards } from './Cards/Cards';

export const Menu = () => {
  return (
    <Section className={style.main__menu} title="Меню">
      <Filter />
      <Cards />
    </Section>
  );
};
