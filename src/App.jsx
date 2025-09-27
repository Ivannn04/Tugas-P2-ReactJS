import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const renderHome = () => (
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
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
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
            {[
              {
                title: "Laskar Pelangi",
                desc: "Kisah anak-anak Belitung penuh inspirasi dan semangat meraih mimpi.",
                img: "https://picsum.photos/400/300?random=1",
              },
              {
                title: "Bumi Manusia",
                desc: "Novel legendaris Pramoedya Ananta Toer tentang cinta dan perjuangan.",
                img: "https://picsum.photos/400/300?random=2",
              },
              {
                title: "Negeri 5 Menara",
                desc: "Cerita perjuangan anak pesantren yang penuh motivasi dan persahabatan.",
                img: "https://picsum.photos/400/300?random=3",
              },
              {
                title: "Ayat-Ayat Cinta",
                desc: "Romansa islami penuh pelajaran hidup yang menyentuh hati.",
                img: "https://picsum.photos/400/300?random=4",
              },
              {
                title: "Dilan 1990",
                desc: "Kisah cinta remaja Bandung yang manis, lucu, dan penuh kenangan.",
                img: "https://picsum.photos/400/300?random=5",
              },
              {
                title: "Koala Kumal",
                desc: "Humor khas Raditya Dika tentang cinta, patah hati, dan move on.",
                img: "https://picsum.photos/400/300?random=6",
              },
            ].map((book, idx) => (
              <div className="col" key={idx}>
                <div className="card shadow-sm h-100">
                  <img src={book.img} className="card-img-top" alt={book.title} />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.desc}</p>
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

  const renderTeam = () => (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Team</h2>
      <div className="row g-4">
        {[
          { name: "Iqbal Fardhani pohan", role: "Programmer", img: "https://i.pravatar.cc/200?img=3" },
          { name: "Ivan Gustav", role: "System Analyst", img: "https://i.pravatar.cc/200?img=4" },
          { name: "Rizky Ramadan", role: "Project Manager", img: "https://i.pravatar.cc/200?img=5" },
          { name: "Ammar Syahputra", role: "UI/UX Designer", img: "https://i.pravatar.cc/200?img=6" },
        ].map((member, idx) => (
          <div className="col-md-3" key={idx}>
            <div className="card shadow-sm h-100">
              <img src={member.img} className="card-img-top" alt={member.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text text-muted">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-4 border rounded-3 shadow-sm bg-light">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send</button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="#"
              onClick={() => setPage("home")}
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" onClick={() => setPage("home")} className="nav-link px-2">Home</a></li>
            <li><a href="#" className="nav-link px-2">Book</a></li>
            <li><a href="#" onClick={() => setPage("team")} className="nav-link px-2">Team</a></li>
            <li><a href="#" onClick={() => setPage("contact")} className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Dynamic Page */}
        {page === "home" && renderHome()}
        {page === "team" && renderTeam()}
        {page === "contact" && renderContact()}

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" onClick={() => setPage("home")} className="nav-link px-2 text-body-secondary">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">Book</a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={() => setPage("team")} className="nav-link px-2 text-body-secondary">Team</a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={() => setPage("contact")} className="nav-link px-2 text-body-secondary">Contact</a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© 2025 NF Academy</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
