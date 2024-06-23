import { useState } from "react";
import BookshelfData from "../../data/BookshelfData.js";
import AddBookForm from "./AddBookForm.jsx";
import BookCard from "./BookCard.jsx";

export default function Bookshelf() {
  const [books, setBooks] = useState(BookshelfData);
  return (
    <main>
      <h1>My bookshelf</h1>
      <section className="bookshelfDiv">
        <section className="formDiv">
          <AddBookForm books={books} setBooks={setBooks} />
        </section>
        <section className="bookCardsDiv">
          {books.map((book, index) => {
            return <BookCard key={index} book={book} />;
          })}
        </section>
      </section>
    </main>
  );
}
