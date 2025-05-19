import { useParams } from 'react-router-dom';
import { books } from '../../data/books';
import BookDetailComponent from '../../components/bookdetail';

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  return <BookDetailComponent book={book} />;
}
