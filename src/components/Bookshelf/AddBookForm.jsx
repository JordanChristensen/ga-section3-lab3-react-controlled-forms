const AddBookForm = ({ books, newBook, setBooks, setNewBook }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: "", author: "" });
    }
  };

  const handleInputChange = (e) => {
    return setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h2>Add a Book</h2>
      </header>
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
      <button onClick={(newBook) => handleSubmit(newBook)}>Add book</button>
    </form>
  );
};

export default AddBookForm;
