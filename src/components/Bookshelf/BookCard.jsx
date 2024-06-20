const BookCard = ({ book }) => {
  return (
    <section className="card">
      <h2>{book.title}</h2>
      <em>by {book.author}</em>
    </section>
  );
};

export default BookCard;
