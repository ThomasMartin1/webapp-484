import AccountNav from "../components/accountnav";
import styles from "../styles/Calendar.module.css";
import ReactDom from "react-dom";
import React from "react";

function day() {
  const array = ["1", "2", "3", "4", "5", "6", "7"];
  array.map((n) => {
    var test = React.createElement("span", null, n);
    ReactDom.render(test, document.getElementById(n));
  });
  return <h2>test</h2>;
}

export default function Calendar() {
  return (
    <>
      <AccountNav />
      <section className={styles.section}>
        <aside className={styles.aside}>
          <button onClick={day}>create event</button>
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
                  <span className={styles.dueDate}>COSC 484, Assignment 2</span>
                  <span className={styles.dueDate}>COSC 484, Assignment 2</span>
                  <span className={styles.dueDate}>COSC 484, Assignment 2</span>
                  <span className={styles.dueDate}>COSC 484, Assignment 2</span>
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
      <div
        className="grid text-left"
        style={{
          rowGap: 0,
          columnGap: 0,
          columnCount: 7,
        }}
      >
        <div className="border">1</div>
        <div className="border">1</div>
        <div className="border">1</div>
        <div className="border">1</div>
        <div className="border">1</div>
        <div className="border">1</div>
        <div className="border">7</div>

        <div className="border">1</div>
        <div className="border">2</div>
        <div className="border">3</div>
        <div className="border">4</div>
        <div className="border">5</div>
        <div className="border">6</div>
        <div className="border">7</div>

        <div className="border">1</div>
        <div className="border">2</div>
        <div className="border">3</div>
        <div className="border">4</div>
        <div className="border">5</div>
        <div className="border">6</div>
        <div className="border">7</div>

        <div className="border">1</div>
        <div className="border">2</div>
        <div className="border">3</div>
        <div className="border">4</div>
        <div className="border">5</div>
        <div className="border">6</div>
        <div className="border">7</div>

        <div className="border">1</div>
        <div className="border">2</div>
        <div className="border">3</div>
        <div className="border">4</div>
        <div className="border">5</div>
        <div className="border">6</div>
        <div className="border">7</div>

        <div className="border">1</div>
        <div className="border">2</div>
        <div className="border">3</div>
        <div className="border">4</div>
        <div className="border">5</div>
        <div className="border">6</div>
        <div className="border">7</div>
      </div>
    </>
  );
}
