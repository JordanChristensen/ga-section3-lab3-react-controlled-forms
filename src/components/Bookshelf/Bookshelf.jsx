import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const handleChange = (e) => {
    setBooks(e.target.value);
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* Form will go here */}
        <form action="">
          <label htmlFor="bookTitle">Title: </label>
          <input
            id="bookTitle"
            name="bookTitle"
            type="text"
            value={books.Title}
            onChange={handleChange}
          />
          <label htmlFor="bookAuthor">Author: </label>
          <input
            id="bookAuthor"
            name="bookAuthor"
            type="text"
            value={books.Author}
            onChange={handleChange}
          />
          <button type="submit">Add book</button>
        </form>
      </div>
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
};

export default Bookshelf;
