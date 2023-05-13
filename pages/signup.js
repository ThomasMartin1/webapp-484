import Link from "next/link";

export default function Signup() {
  return (
    <>
      <header className="navbar navbar-expand-lg sticky-top navbar-light bg-light p-2">
        <Link className="navbar-brand my-2 h1" href="/">
          InstaStudy
        </Link>
      </header>
      <div className="container vh-100">
        <div className="card p-4 m-4 w-50 mx-auto">
          <h1>Create account</h1>
          <form action="#" method="POST" className="my-3">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-75 rounded mb-2 border shadow px-3 py-2 focus:border-primary"
              />
              <br />
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="w-75 rounded mb-2 border shadow px-3 py-2 focus:border-primary"
              />
              <input
                id="vpassword"
                name="vpassword"
                type="password"
                required
                placeholder="Confirm Password"
                className="w-75 rounded mb-2 border shadow px-3 py-2 focus:border-primary"
              />
            </div>
            <div className="m-2">
              <input id="remember-me" name="remember-me" type="checkbox" />
              <label className="ms-2">Remember me</label>
            </div>
          </form>
          <Link className="btn btn-primary" href="/dashboard" role="button">
            Create account
          </Link>
        </div>
      </div>
    </>
  );
}
