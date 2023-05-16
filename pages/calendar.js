import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import View from "../components/view";
import axios from "axios";
import styles from "../styles/Calendar.module.css";
import ReactDom from "react-dom";
import React from "react";

export default function Calendar() {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const { data: session } = useSession();
  const email = session?.user.email;
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/items").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <>
      <View>
        <div className="h1">calendar page</div>
        <form onSubmit={createItem} className="m-4">
          <p>Add cal item</p>
          <div className="m-2 h5 text-primary">Type</div>
          <input
            type="text"
            placeholder="Add type"
            value={type}
            onChange={(ev) => setType(ev.target.value)}
            className="w-75 rounded border shadow px-3 py-2 focus:border-primary"
          />
          <div className="m-2 h5 text-primary">Title</div>
          <input
            type="text"
            placeholder="Add title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            className="w-75 rounded border shadow px-3 py-2 focus:border-primary"
          />
          <div className="m-2 h6 text-secondary">
            <span className="h5 text-primary">Date/ Time </span>
            2023-06-12T01:23:45.678+90:00
          </div>
          <input
            type="text"
            placeholder="Add date/ time"
            value={date}
            onChange={(ev) => setDate(ev.target.value)}
            className="w-75 rounded border shadow px-3 py-2 focus:border-primary"
          />
          <br />
          <button type="submit" className="btn btn-primary my-3">
            Save
          </button>
        </form>
        <section className={styles.section}>
          <aside className={styles.aside}>
            <ul className={styles.asideUl}>
              <li>
                <label for="class-1">Due dates : </label>
                <input type="checkbox" name="class-1" />
              </li>
              <br />
              <li>
                <label for="class-2">Events : </label>
                <input type="checkbox" name="class-2" />
              </li>
              <br />
              <li>
                <label for="class-3">Study times: </label>
                <input type="checkbox" name="class-3" />
              </li>
              <br />
            </ul>
          </aside>
          <article className={styles.article}>
            <table className={styles.calendarTable}>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <div id="1">
                    <h5>30</h5>
                    <span className={styles.dueDate}>
                      COSC 484, Assignment 2
                    </span>
                    <span className={styles.dueDate}>
                      COSC 484, Assignment 2
                    </span>
                    <span className={styles.dueDate}>
                      COSC 484, Assignment 2
                    </span>
                    <span className={styles.dueDate}>
                      COSC 484, Assignment 2
                    </span>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="2">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="3">
                    <h5>1</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="4">
                    <h5>2</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="5">
                    <h5>3</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="6">
                    <h5>4</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="7">
                    <h5>5</h5>
                  </div>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <div id="8">
                    <h5>6</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="9">
                    <h5>7</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="10">
                    <h5>8</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="11">
                    <h5>9</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="12">
                    <h5>10</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="13">
                    <h5>11</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="14">
                    <h5>12</h5>
                  </div>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <div id="15">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="16">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="17">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="18">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="19">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="20">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="21">
                    <h5>30</h5>
                  </div>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <div id="22">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="23">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="24">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="25">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="26">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="27">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="28">
                    <h5>30</h5>
                  </div>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <div id="29">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="30">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="31">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="32">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="33">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="34">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="35">
                    <h5>30</h5>
                  </div>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <div id="36">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="37">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="38">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="39">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="40">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="41">
                    <h5>30</h5>
                  </div>
                </td>
                <td className={styles.td}>
                  <div id="42">
                    <h5>30</h5>
                  </div>
                </td>
              </tr>
            </table>
          </article>
        </section>
      </View>
    </>
  );

  async function createItem(ev) {
    ev.preventDefault();
    const item = { email, type, title, date };
    await axios.post("/api/items", item);
  }
}
