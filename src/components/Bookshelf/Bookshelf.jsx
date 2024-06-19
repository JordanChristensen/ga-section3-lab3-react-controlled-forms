import { useState } from "react";
import BookshelfData from "../../data/BookshelfData.js";

const Bookshelf = () => {
  const [books, setBooks] = useState(BookshelfData);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (e) => {
    return setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Default form submission has been prevented.");
  };

  return (
    <main>
      <h1>My bookshelf</h1>
      <section className="bookshelfDiv">
        <section className="formDiv">
          <h2>Add a Book</h2>
          <form>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              type="text"
              value={newBook.title}
              autoFocus
              required
              onChange={handleInputChange}
            />
            <label htmlFor="author">Author: </label>
            <input
              id="author"
              name="author"
              type="text"
              value={newBook.author}
              required
              onChange={handleInputChange}
            />
            <button type="submit">Add book</button>
          </form>
        </section>
        <section className="bookCardsDiv" onSubmit={handleSubmit}>
          {/* Book cards will display here */}
          
          {/* <Book title={books.title} /> */}
        </section>
      </section>
    </main>
  );
};

export default Bookshelf;
