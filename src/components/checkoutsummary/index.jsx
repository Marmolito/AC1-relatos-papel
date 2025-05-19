import './styles.css';

export default function CheckoutSummary({ cartItems }) {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-summary">
      <h2 className="checkout-summary__title">Resumen de compra</h2>
      <ul className="checkout-summary__list">
        {cartItems.map((item) => (
          <li key={item.id} className="checkout-summary__item">
            {item.title} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p className="checkout-summary__total">Total: ${total.toFixed(2)}</p>
    </div>
  );
}
