import { useState } from "react";
import BookshelfData from "../../data/BookshelfData.js";
import AddBookForm from "./AddBookForm.jsx";

const Bookshelf = () => {
  const [books, setBooks] = useState(BookshelfData);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  return (
    <main>
      <h1>My bookshelf</h1>
      <section className="bookshelfDiv">
        <section className="formDiv">
          <AddBookForm
            books={books}
            newBook={newBook}
            setBooks={setBooks}
            setNewBook={setNewBook}
          />
        </section>
        <section className="bookCardsDiv">
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
