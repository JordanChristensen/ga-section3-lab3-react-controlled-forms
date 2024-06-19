import { useState } from "react";
// import Book from "./Book";
// import BookshelfDataBookAuthor from "./BookshelfDataBookAuthor";
// import BookshelfDataBookTitle from "./BookshelfDataBookTitle";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const handleFormInputChange = (e) => {
    return setBooks({ ...books, [e.target.name]: e.target.value });
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
            <label htmlFor="bookTitle">Title: </label>
            <input
              id="bookTitle"
              name="bookTitle"
              type="text"
              value={books.title}
              onChange={handleFormInputChange}
            />
            <label htmlFor="bookAuthor">Author: </label>
            <input
              id="bookAuthor"
              name="bookAuthor"
              type="text"
              value={books.author}
              onChange={handleFormInputChange}
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
