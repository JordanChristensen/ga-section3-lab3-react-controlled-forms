const AddBookForm = ({ newBook, handleInputChange, handleSubmit }) => {
  return (
    <form>
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
