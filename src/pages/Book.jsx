import { useState } from "react";
import booksData from "../utils/books";

function Book() {
  const [books, setBooks] = useState(booksData);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) {
      alert("Judul dan Penulis wajib diisi!");
      return;
    }

    const bookToAdd = {
      id: books.length + 1,
      ...newBook
    };

    setBooks([...books, bookToAdd]);

    setNewBook({
      title: "",
      author: "",
      year: "",
      description: "",
      image: ""
    });
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Daftar Buku NF Bookstore</h1>

      {/* Form Tambah Buku */}
      <div className="card mb-5">
        <div className="card-body">
          <h5 className="card-title">Tambah Buku Baru</h5>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Judul Buku"
                  name="title"
                  value={newBook.title}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Penulis"
                  name="author"
                  value={newBook.author}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Tahun Terbit"
                  name="year"
                  value={newBook.year}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Link Gambar"
                  name="image"
                  value={newBook.image}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Deskripsi Buku"
                  name="description"
                  value={newBook.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Tambah Buku
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Daftar Buku */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">
                  <em>{book.author} ({book.year})</em>
                </p>
                <p className="card-text">{book.description}</p>
              </div>
              <div className="card-footer text-muted text-center">
                NF Bookstore
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
