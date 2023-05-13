import logo from "../public/instastudy.png";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container pt-5">
          <Image
            src={logo}
            alt="InstaStudy Logo"
            className="mx-auto d-block my-3"
          />
          <h1 className="p-4 text-center">About Us</h1>
          <p>
            Procrastination is a universal phenomenon that afflicts students of
            all levels. It can have very disastrous effects, including low
            grades, depression, anxiety, stress, and even physical health
            issues. The main objective of InstaStudy is to eliminate
            procrastination by helping all students easily organize and quickly
            view daily objectives to stay on top of assignments. Our project's
            main target audience is college students. This program will allow
            students and other individuals to plan their day and tasks in a more
            efficient manner. We are gearing this towards college students to
            help them study.
          </p>
        </div>
      </section>
    </>
  );
}
