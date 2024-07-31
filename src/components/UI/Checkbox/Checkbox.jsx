import style from './Checkbox.module.css';

export const Checkbox = ({ id, className, productTitle, price, callback, currentPrice }) => {
  const handleChange = ({ target }) => {
    const value = parseInt(target.value);

    if (target.checked && price) {
      currentPrice += value;
      callback(currentPrice);
    } else if (price) {
      currentPrice -= value;
      callback(currentPrice);
    }
  };

  return (
    <div className={className}>
      <input type="checkbox" id={id} value={price ? price : ''} onChange={e => handleChange(e)} />
      <label htmlFor={id}>
        {productTitle}
        {price ? (
          <span className={style.price}>
            +<span>{price}</span>₽
          </span>
        ) : (
          <></>
        )}
      </label>
    </div>
  );
};
