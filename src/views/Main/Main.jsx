import { Introdution } from './Introdution/Introdution';
import { Hero } from './Hero/Hero';
import { Menu } from './Menu/Menu';
import { Delivery } from './Delivery/Delivery';
import { Features } from './Features/Features';
import { Special } from './Special/Special';
import { Contacts } from './Contacts/Contacts';
import { Footer } from '../Footer/Footer';

export const Main = () => {
  return (
    <main className="main">
      <Hero />
      <a id="menu" className="anchor"></a>
      <Menu />
      <a id="about" className="anchor"></a>
      <Introdution />
      <Delivery />
      <Features />
      <a id="special" className="anchor"></a>
      <Special />
      <a id="contacts" className="anchor"></a>
      <Contacts />
      <Footer />
    </main>
  );
};
