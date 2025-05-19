// src/components/bookdetail/index.jsx
import BookActions from '../bookactions';
import './styles.css';

export default function BookDetailComponent({ book }) {
  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} className="book-detail__image" />
      <div className="book-detail__info">
        <h2 className="book-detail__title">{book.title}</h2>
        <p className="book-detail__author">Autor: {book.author}</p>
        <p className="book-detail__price">Precio: ${book.price}</p>
        <p className="book-detail__description">
          {book.description || 'Sin descripción.'}
        </p>

        <BookActions book={book} />
      </div>
    </div>
  );
}
