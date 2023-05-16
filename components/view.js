import { useSession, signIn } from "next-auth/react";
import Navbar from "./navbar";
import { FaGoogle } from "react-icons/fa";

export default function View({ children }) {
  const session = useSession();
  if (session.status !== "authenticated") {
    return (
      <>
        <Navbar />
        <div className="container vh-100">
          <div className="card p-4 m-4 w-50 mx-auto">
            <h1>Login</h1>
            <button
              onClick={() => signIn("google")}
              className="btn btn-primary"
            >
              <FaGoogle size={25} className="mb-1" />
              <p className="ms-1 d-inline">Sign in with Google</p>
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
