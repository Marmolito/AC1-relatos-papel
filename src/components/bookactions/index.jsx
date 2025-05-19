import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/cartcontext';
import './styles.css';

export default function BookActions({ book }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const isDetailPage = location.pathname === `/books/${book.id}`;

  return (
    <div className="book-actions">
      <button
        className="book-actions__add"
        onClick={() => addToCart(book)}
      >
        Añadir al carrito
      </button>

      {!isDetailPage && (
        <button
          className="book-actions__detail"
          onClick={() => navigate(`/books/${book.id}`)}
        >
          Ver detalle
        </button>
      )}
    </div>
  );
}
