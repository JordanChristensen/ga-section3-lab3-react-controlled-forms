import { useState } from "react";

export default function AddBookForm({ books, setBooks }) {
  const [formData, setFormData] = useState({ title: "", author: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.author) {
      setBooks([...books, formData]);
      setFormData({ title: "", author: "" });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        value={formData.title}
        autoFocus
        required
        onChange={handleInputChange}
      />
      <label htmlFor="author">Author: </label>
      <input
        id="author"
        name="author"
        type="text"
        value={formData.author}
        required
        onChange={handleInputChange}
      />
      <button type="submit">Add book</button>
    </form>
  );
}
