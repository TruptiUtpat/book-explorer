import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";
import Navbar from "../components/Navbar";
import "./BookDetails.css";

interface Book {
  id: number;
  title: string;
  author: string;
  longDescription: string;
  image?: string;
}

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b: Book) => b.id === Number(id));

  if (!book) {
    return (
      <div style={styles.container}>
        <h2>Book not found</h2>
        <button onClick={() => navigate("/books")}>Back to Book List</button>
      </div>
    );
  }

  return (
  <>
    <Navbar showLogout />

    <div className="details-container">
      <button className="back-btn" onClick={() => navigate("/books")}>
        ← Back
      </button>

      <div className="details-content">
        <img src={book.image} alt={book.title} />

        <div className="details-text">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p>{book.longDescription}</p>
        </div>
      </div>
    </div>
  </>
);
};


export default BookDetails;