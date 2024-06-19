import { useState } from "react";
import BookshelfData from "../../data/BookshelfData.js";
import AddBookForm from "./AddBookForm.jsx";

const Bookshelf = () => {
  const [books, setBooks] = useState(BookshelfData);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (e) => {
    return setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: "", author: "" });
    }
  };

  return (
    <main>
      <h1>My bookshelf</h1>
      <section className="bookshelfDiv">
        <section className="formDiv">
          <AddBookForm
            newBook={newBook}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </section>
        <section className="bookCardsDiv" onSubmit={handleSubmit}>
          {books.map((book, index) => {
            return (
              <section key={index} className="card">
                <h2>{book.title}</h2>
                <em>by {book.author}</em>
              </section>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default Bookshelf;
