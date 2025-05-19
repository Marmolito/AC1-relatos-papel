import BookActions from '../bookactions';
import './styles.css';

export default function BookCard({ id, title, author, price, image }) {
  const book = { id, title, author, price, image };

  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-card__image" />
      <div className="book-card__info">
        <h3 className="book-card__title">{title}</h3>
        <p className="book-card__author">Autor: {author}</p>
        <p className="book-card__price">Precio: ${price}</p>

        <BookActions book={book} />
      </div>
    </div>
  );
}
