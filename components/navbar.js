import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { FaGoogle, FaSignOutAlt } from "react-icons/fa";
import { BsPersonGear } from "react-icons/bs";

export default function Navbar() {
  const router = useRouter();
  const { route } = router;
  const session = useSession();

  return (
    <>
      <header className="navbar navbar-expand-lg sticky-top navbar-light bg-light p-2">
        <Link className="navbar-brand my-2 h1" href="/">
          InstaStudy
        </Link>
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
          {getItems()}
          {getControls()}
        </div>
      </header>
    </>
  );

  function getItems() {
    if (session.status === "authenticated" && route !== "/") {
      return (
        <>
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
        </>
      );
    }
    return (
      <>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link link-primary" href="/#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-primary" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-primary" href="/#team">
              Our Team
            </a>
          </li>
        </ul>
      </>
    );
  }

  function getControls() {
    if (session.status === "authenticated") {
      return (
        <>
          <ul className="navbar-nav">
            <li className="p-2">
              <Link className="btn btn-primary" href="/profile" role="button">
                <BsPersonGear size={30} />
              </Link>
            </li>
            <li className="p-2">
              <button className="btn btn-outline-primary">
                <FaSignOutAlt size={30} onClick={() => signOut()} />
              </button>
            </li>
          </ul>
        </>
      );
    }
    return (
      <>
        <ul className="navbar-nav">
          <li className="nav-item p-2">
            <Link className="btn btn-primary" href="/dashboard">
              <FaGoogle size={25} className="mb-1" />
              <p className="ms-1 d-inline">Sign in</p>
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
