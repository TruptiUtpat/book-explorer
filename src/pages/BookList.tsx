import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { books } from "../data/books";
import "./BookList.css";

interface Book {
  id: number;
  title: string;
  author: string;
  image?: string;
}

const BookList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  const filteredBooks = books.filter(
    (book: Book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

 
  if (loading) {
    return (
      <>
        <Navbar showLogout />
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <h3>Please wait, books are loading...</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar showLogout />

      <div className="book-container">
        <input
          className="search-box"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="book-grid">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="book-card"
              onClick={() => navigate(`/books/${book.id}`)}
            >
              {book.image && (
                <img src={book.image} alt={book.title} />
              )}
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;