import { useCart } from "../../hooks/cartcontext";
import { useNavigate } from "react-router-dom";
import './styles.css';

export default function Cart({ onClose }) {
  const { cartItems, removeFromCart, clearCart, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate("/checkout"); 
  };

  return (
    <div className="cart">
      <h3 className="cart__title">Carrito</h3>
      <ul className="cart__list">
        {cartItems.length === 0 && <li className="cart__empty-message">El carrito está vacío</li>}

        {cartItems.map(item => (
          <li key={item.id} className="cart__item">
            <span className="cart__item-title">{item.title}</span>
            <span className="cart__item-quantity">x {item.quantity}</span>
            <button
              className="cart__button"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
            <button
              className="cart__remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <>
          <button className="cart__clear-button" onClick={clearCart}>
            Vaciar carrito
          </button>
          <button
            className="cart__checkout-button"
            onClick={handleCheckout}
          >
            Proceder al checkout
          </button>
        </>
      )}
    </div>
  );
}
