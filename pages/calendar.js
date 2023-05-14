import AccountNav from "../components/accountnav";
import styles from "../styles/Calendar.module.css";

export default function Calendar() {
  return (
    <>
      <AccountNav />
      <section className={styles.section}>
        <aside className={styles.aside}>
          <ul className={styles.asideUl}>
            <li>create event</li>
            <li>
              <label for="class-1">Class 1:</label>
              <input type="checkbox" name="class-1" />
            </li>
            <br />
            <li>
              <label for="class-2">Class 2:</label>
              <input type="checkbox" name="class-2" />
            </li>
            <br />
            <li>
              <label for="class-3">Class 3:</label>
              <input type="checkbox" name="class-3" />
            </li>
            <br />
          </ul>
        </aside>
        <article className={styles.article}>
          <table className={styles.calendarTable}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <div>
                  <h5>30</h5>
                  <span className={styles.dueDate}>COSC 484, Assignme...</span>
                  <span className={styles.dueDate}>COSC 484, Assignment 2</span>
                  <span className={styles.dueDate}>COSC 484, Assignment 2</span>
                  <br />
                  <span className={styles.dueDate}>COSC 484, Assignment 2</span>
                  <br />
                </div>
              </td>
              <td className={styles.td}>1</td>
              <td className={styles.td}>2</td>
              <td className={styles.td}>3</td>
              <td className={styles.td}>4</td>
              <td className={styles.td}>5</td>
              <td className={styles.td}>6</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>7</td>
              <td className={styles.td}>8</td>
              <td className={styles.td}>9</td>
              <td className={styles.td}>10</td>
              <td className={styles.td}>11</td>
              <td className={styles.td}>12</td>
              <td className={styles.td}>13</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>14</td>
              <td className={styles.td}>15</td>
              <td className={styles.td}>16</td>
              <td className={styles.td}>17</td>
              <td className={styles.td}>18</td>
              <td className={styles.td}>19</td>
              <td className={styles.td}>20</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>21</td>
              <td className={styles.td}>22</td>
              <td className={styles.td}>23</td>
              <td className={styles.td}>24</td>
              <td className={styles.td}>25</td>
              <td className={styles.td}>26</td>
              <td className={styles.td}>27</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>28</td>
              <td className={styles.td}>29</td>
              <td className={styles.td}>30</td>
              <td className={styles.td}>31</td>
              <td className={styles.td}>1</td>
              <td className={styles.td}>2</td>
              <td className={styles.td}>3</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>4</td>
              <td className={styles.td}>5</td>
              <td className={styles.td}>6</td>
              <td className={styles.td}>7</td>
              <td className={styles.td}>8</td>
              <td className={styles.td}>9</td>
              <td className={styles.td}>10</td>
            </tr>
          </table>
        </article>
      </section>
    </>
  );
}
