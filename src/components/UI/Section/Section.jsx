import { Container } from '../../../views/Container/Container';
import style from './Section.module.css';

export const Section = props => {
  return props.className ? (
    <section className={`${style.section} ${props.className}`}>
      <Container>
        <h2 className={style.section__title}>{props.title}</h2>
        {props.children}
      </Container>
    </section>
  ) : (
    <section className={style.section}>
      <Container>
        <h2 className={style.section__title}>{props.title}</h2>
        {props.children}
      </Container>
    </section>
  );
};
