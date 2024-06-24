export default function BookCard({ book }) {
  return (
    <section className="card">
      <h2>{book.title}</h2>
      <em>by {book.author}</em>
    </section>
  );
}
