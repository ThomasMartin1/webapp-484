import Image from "next/image";
import pic from "../public/instastudy.png";
import styles from "../styles/Team.module.css";

export default function Team() {
  const data = [
    { name: "Austin", title: "Front-end Developer" },
    { name: "Brett", title: "Front-end Developer" },
    { name: "Camila", title: "Front-end Developer" },
    { name: "Charles", title: "Back-end Developer" },
    { name: "Devjon", title: "Back-end Developer" },
    { name: "Olivia", title: "Front-end Developer" },
    { name: "Paulo", title: "Back-end Developer" },
  ];
  return (
    <>
      <section id="team">
        <div className="container pt-5">
          <h1 className="p-4  text-center">Meet Our Team</h1>
          <div className="card-group gap-5 justify-content-center">
            {data.map((member) => {
              return (
                <div
                  key={member.name}
                  className="p-3 rounded shadow g-col-5"
                  id={styles.card}
                >
                  <Image
                    src={pic}
                    className="rounded-circle mx-auto d-block bg-secondary w-50 h-50"
                    alt="head shot"
                  />
                  <hr></hr>
                  <p className="fw-light fs-3">{member.name}</p>
                  <p className="text-secondary">{member.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
