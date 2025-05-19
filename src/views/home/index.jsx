import { useState } from 'react';
import BookList from '../../components/booklist';
import SearchBar from '../../components/searchbar';
import Footer from '../../components/footer';
import './styles.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__title">Bienvenido a la Tienda de Libros</h1>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </header>
      <main className="home__main">
        <BookList searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}
