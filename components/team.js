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
        <div className="container-md">
          <div className="flex-col text-center">
            <h1 className="p-3">Meet Our Team</h1>
            <div className="card-group justify-content-center">
              {data.map((member) => {
                return (
                  <div key={member.name} className="w-full p-4">
                    <div className="p-3 rounded shadow" id={styles.card}>
                      <Image
                        src={pic}
                        className="rounded-circle bg-secondary w-50 h-50"
                        alt="head shot"
                      />
                      <hr></hr>
                      <p className="fw-light fs-3">{member.name}</p>
                      <p className="text-secondary">{member.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
