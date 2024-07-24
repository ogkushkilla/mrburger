import { useEffect, useState } from 'react';
import style from './CardItem.module.css';
import { Button } from '../../../../components/UI/Button/Button';
import { Modal } from '../../../Modal/Modal';

export const CardItem = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('средний');
  const [price, setPrice] = useState(product.price);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [productAmount, setProductAmount] = useState(1);

  useEffect(() => {
    const productItems = JSON.parse(localStorage.getItem('products')) || [];
    const currentProduct = productItems.find(item => item.id === product.id);

    if (currentProduct && currentProduct.amount) {
      setIsAddedToCart(true);
      setProductAmount(currentProduct.amount);
    }
  }, [product]);

  const handleClick = chosenType => {
    setType(chosenType);

    if (chosenType === 'средний') {
      setPrice(product.price);
    } else {
      setPrice(product.price + 50);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.menu__card}>
      <img src={product.image} className={style.card__image} />
      <h3 className={style.card__title}>{product.name}</h3>
      <p className={style.card__text}>{product.composition}</p>
      <div className={style.card__choose}>
        <button
          onClick={e => handleClick(e.target.textContent)}
          className={`${style.choosen__type} ${type === 'средний' ? style.active : ''}`}
        >
          средний
        </button>
        <button
          onClick={e => handleClick(e.target.textContent)}
          className={`${style.choosen__type} ${type === 'большой' ? style.active : ''}`}
        >
          большой
        </button>
      </div>
      <div className={style.card__value}>
        <span className={style.card__price}>{price} ₽</span>
        {isAddedToCart ? (
          <div className={style.product__params}>
            <Button
              className={style.decrease}
              onClick={() => {
                const products = JSON.parse(localStorage.getItem('products'));
                const currentProduct = products.find(item => item.id === product.id);

                if (currentProduct) {
                  currentProduct.amount = productAmount - 1;
                  setProductAmount(currentProduct.amount);

                  if (currentProduct.amount === 0) {
                    const currentProductIndex = products.indexOf(currentProduct);

                    if (currentProductIndex > -1) {
                      products.splice(currentProductIndex, 1);
                      localStorage.setItem('products', JSON.stringify(products));
                      setIsAddedToCart(false);
                    }
                  }
                }
                localStorage.setItem('products', JSON.stringify(products));
              }}
            >
              -
            </Button>
            {productAmount}
            <Button
              className={style.increase}
              onClick={() => {
                const products = JSON.parse(localStorage.getItem('products'));
                const currentProduct = products.find(item => item.id === product.id);

                if (currentProduct) {
                  currentProduct.amount = productAmount + 1;
                  setProductAmount(currentProduct.amount);
                }
                localStorage.setItem('products', JSON.stringify(products));
              }}
            >
              +
            </Button>
          </div>
        ) : (
          <Button className={style.card__button} onClick={openModal}>
            Заказать
          </Button>
        )}
      </div>
      {isModalOpen && (
        <Modal
          product={product}
          closeModal={closeModal}
          setIsAddedToCart={setIsAddedToCart}
          setProductAmount={setProductAmount}
          type={type}
          price={price}
        />
      )}
    </div>
  );
};
