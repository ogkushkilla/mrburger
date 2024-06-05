import { Container } from '../../../views/Container/Container';
import style from './Section.module.css';

export const Section = props => {
  return (
    <section className={`${style.section} ${props.className ? props.className : ''}`}>
      <Container>
        {props.title ? <h2 className={style.section__title}>{props.title}</h2> : <></>}
        {props.children}
      </Container>
    </section>
  );
};
