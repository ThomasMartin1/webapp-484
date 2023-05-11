import logo from "../public/instastudy.png";
import Image from "next/image";
export default function () {
  return (
    <div className="container text-center mt-5">
      <div className="container text-center mt-1">
        <Image src={logo} alt="InstaStudy Logo"></Image>

        <div>
          <h2 class>About Us</h2>
        </div>
        <p>
          Procrastination is a universal phenomenon that afflicts students of
          all levels. It can have very disastrous effects, including low grades,
          depression, anxiety, stress, and even physical health issues. The main
          objective of InstaStudy is to eliminate procrastination by helping all
          students easily organize and quickly view daily objectives to stay on
          top of assignments. Our project's main target audience is college
          students. This program will allow students and other individuals to
          plan their day and tasks in a more efficient manner. We are gearing
          this towards college students to help them study.
        </p>
      </div>
    </div>
  );
}
