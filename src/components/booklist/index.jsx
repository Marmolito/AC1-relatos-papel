import BookCard from '../bookcard';
import { books } from '../../data/books';
import './styles.css';

export default function BookList({ searchTerm }) {
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="book-list">
      <h2 className="book-list__title">Libros Disponibles</h2>
      <div className="book-list__grid">
        {filteredBooks.length === 0 ? (
          <p>No se encontraron libros que coincidan con la búsqueda.</p>
        ) : (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              image={book.image}
            />
          ))
        )}
      </div>
    </section>
  );
}
