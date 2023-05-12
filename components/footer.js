import { FaInfoCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <hr className="m-5"></hr>
      <div className="container p-3 my-3 mx-auto text-center">
        <span className="fs-4">InstaStudy footer</span>
        <FaInfoCircle size={20} className="m-2" />
      </div>
    </footer>
  );
}
