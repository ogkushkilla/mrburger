import { Introdution } from './Introdution/Introdution';
import { Hero } from './Hero/Hero';
import { Menu } from './Menu/Menu';
import { Delivery } from './Delivery/Delivery';
import { Features } from './Features/Features';
import { Special } from './Special/Special';
import { Contacts } from './Contacts/Contacts';
import { Footer } from '../Footer/Footer';

export const Main = () => {
  const smoothScroll = (event, link) => {
    event.preventDefault();
    let linkId = link.getAttribute('href');
    console.log(linkId);
    if (linkId === undefined || linkId === null) {
      linkId = link.dataset.section;
    }
    document.querySelector(linkId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main className="main">
      <Hero handler={e => smoothScroll(e, e.target)} />
      <a id="menu" className="anchor"></a>
      <Menu handler={e => smoothScroll(e, e.target)} />
      <a id="about" className="anchor"></a>
      <Introdution />
      <Delivery handler={e => smoothScroll(e, e.target)} />
      <Features />
      <a id="special" className="anchor"></a>
      <Special />
      <a id="contacts" className="anchor"></a>
      <Contacts />
      <Footer />
    </main>
  );
};
