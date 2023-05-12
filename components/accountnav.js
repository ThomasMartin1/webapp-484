import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import { BsPersonGear } from "react-icons/bs";

export default function AccountNav() {
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
              <Link className="nav-link link-primary" href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-primary" href="/calendar">
                Calendar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-primary" href="/timer">
                Timer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-primary" href="/messages">
                Messages
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <Link className="btn btn-primary" href="/profile" role="button">
                <BsPersonGear size={25} className="mb-1 me-1" />
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link link-primary" href="/">
                <FaSignOutAlt size={25} className="mb-1" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
