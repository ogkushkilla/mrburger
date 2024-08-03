import style from './Checkbox.module.css';

export const Checkbox = ({
  id,
  className,
  productTitle,
  weight,
  price,
  setCurrentPrice,
  productPrice,
  checkedAdditionals,
  setCheckedAdditionals,
}) => {
  const handleChange = ({ target }) => {
    const value = parseInt(target.value);

    if (target.checked && price) {
      productPrice += value;
      setCurrentPrice(productPrice);
      checkedAdditionals.push({ id, price, title: productTitle, weight });
      setCheckedAdditionals(checkedAdditionals);
    } else if (price) {
      productPrice -= value;
      setCurrentPrice(productPrice);
      setCheckedAdditionals(checkedAdditionals.filter(item => item.price !== value));
    }
  };

  return (
    <div className={className}>
      <input type="checkbox" id={id} value={price} onChange={e => handleChange(e)} />
      <label htmlFor={id}>
        {productTitle}
        {
          <span className={style.price}>
            +<span>{price}</span>₽
          </span>
        }
      </label>
    </div>
  );
};
