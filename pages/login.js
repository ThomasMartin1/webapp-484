import Navbar from "../components/navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="container vh-100">
        <div className="card p-4 m-4 w-50 mx-auto">
          <h1>Login</h1>
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
            </div>
            <div className="m-2">
              <input id="remember-me" name="remember-me" type="checkbox" />
              <label className="ms-2">Remember me</label>
            </div>
            <a className="ms-2" href="#">
              Forgot Password?
            </a>
            <a className="ms-2" href="/signup">
              Don't have an account?
            </a>
          </form>
          <a className="btn btn-primary" href="#" role="button">
            Login
          </a>
        </div>
      </div>
    </>
  );
}
