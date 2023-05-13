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
              <th className={styles.th}>30</th>
              <th className={styles.th}>1</th>
              <th className={styles.th}>2</th>
              <th className={styles.th}>3</th>
              <th className={styles.th}>4</th>
              <th className={styles.th}>5</th>
              <th className={styles.th}>6</th>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>7</th>
              <th className={styles.th}>8</th>
              <th className={styles.th}>9</th>
              <th className={styles.th}>10</th>
              <th className={styles.th}>11</th>
              <th className={styles.th}>12</th>
              <th className={styles.th}>13</th>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>14</th>
              <th className={styles.th}>15</th>
              <th className={styles.th}>16</th>
              <th className={styles.th}>17</th>
              <th className={styles.th}>18</th>
              <th className={styles.th}>19</th>
              <th className={styles.th}>20</th>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>21</th>
              <th className={styles.th}>22</th>
              <th className={styles.th}>23</th>
              <th className={styles.th}>24</th>
              <th className={styles.th}>25</th>
              <th className={styles.th}>26</th>
              <th className={styles.th}>27</th>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>28</th>
              <th className={styles.th}>29</th>
              <th className={styles.th}>30</th>
              <th className={styles.th}>31</th>
              <th className={styles.th}>1</th>
              <th className={styles.th}>2</th>
              <th className={styles.th}>3</th>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>4</th>
              <th className={styles.th}>5</th>
              <th className={styles.th}>6</th>
              <th className={styles.th}>7</th>
              <th className={styles.th}>8</th>
              <th className={styles.th}>9</th>
              <th className={styles.th}>10</th>
            </tr>
          </table>
        </article>
      </section>
    </>
  );
}
