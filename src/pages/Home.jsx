import books from "../utils/books";

function Home() {
  return (
    <>
      {/* Hero */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Selamat Datang di NF Bookstore
            </h1>
            <p className="lead">
              Temukan koleksi buku terbaik untuk inspirasi, pembelajaran, dan hiburan Anda.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Belanja Sekarang
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-3 img-fluid"
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Books"
              width="720"
            />
          </div>
        </div>
      </div>

      {/* Book List */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Selling Books</h1>
            <p className="lead text-body-secondary">
              Pilihan novel populer yang digemari banyak pembaca.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100">
                  <img src={book.image} className="card-img-top" alt={book.title} />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">
                      <em>{book.author} ({book.year})</em>
                    </p>
                    <p className="card-text">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-body-secondary">New</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
