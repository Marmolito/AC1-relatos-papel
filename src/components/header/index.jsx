import { useCart } from "../../hooks/cartcontext";
import './styles.css';

export default function Header({ onCartClick, cartOpen }) {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1 className="header__title">Relatos de Papel</h1>
      <button
        className="header__cart-button"
        onClick={onCartClick}
        aria-label={cartOpen ? "Cerrar carrito" : "Abrir carrito"}
      >
        🛒
        {totalQuantity > 0 && <span className="header__cart-count">{totalQuantity}</span>}
      </button>
    </header>
  );
}
