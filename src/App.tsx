import "./App.css";

function App() {
  return (
    <main className="content">
      <section className="card">
        <img src="/images/image-victor.jpg" />
        <p className="name-and-age">
          <span className="name">Victor Crest</span>
          <span className="age">26</span>
        </p>
        <span className="city">London</span>
        <hr className="divider" />
        <div className="stats">
          <div className="stat-n">
            <span className="stat-value">80K</span>
            <span className="stat-name">Followers</span>
          </div>
          <div className="stat-n">
            <span className="stat-value">803K</span>
            <span className="stat-name">Likes</span>
          </div>
          <div className="stat-n">
            <span className="stat-value">1.4K</span>
            <span className="stat-name">Photos</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
