import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="navbar navbar-expand-lg sticky-top navbar-light bg-light p-2">
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
              <a className="nav-link link-primary" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-primary" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-primary" href="#team">
                Our Team
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <Link className="btn btn-outline-primary" href="/signup">
                Sign-up
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="btn btn-primary" href="/login" role="button">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
