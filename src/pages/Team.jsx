function Team() {
  return (
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
}

export default Team;
