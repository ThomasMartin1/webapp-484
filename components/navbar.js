export default function Navbar() {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light bg-light p-2">
        <a className="navbar-brand mb-0 h1">InstaStudy</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Our Team
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <a className="btn btn-outline-primary" href="#">
                Sign-up
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="btn btn-primary" href="#" role="button">
                Login
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
