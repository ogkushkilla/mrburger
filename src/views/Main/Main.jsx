import { Introdution } from './Introdution/Introdution';
import { Hero } from './Hero/Hero';
import { Menu } from './Menu/Menu';
import { Delivery } from './Delivery/Delivery';

export const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Menu />
      <Introdution />
      <Delivery />
    </main>
  );
};
