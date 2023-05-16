export default function Courses(props) {
  const list = props.courses;

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
              <th scope="col">Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{filterCourses("Monday")}</td>
              <td>{filterCourses("Tuesday")}</td>
              <td>{filterCourses("Wednesday")}</td>
              <td>{filterCourses("Thursday")}</td>
              <td>{filterCourses("Friday")}</td>
              <td>{filterCourses("Saturday")}</td>
              <td>{filterCourses("Sunday")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

  function filterCourses(weekDay) {
    if (!list.isEmpty())
      return (
        <>
          {list.map((course, idx) => {
            if (course.days.contains(weekDay)) {
              <div className="rounded shadow border m-3 p-2 w-25" key={idx}>
                <div>{item.type}</div>
                <div>{item.title}</div>
                <div>{item.date}</div>
              </div>;
            }
          })}
        </>
      );
  }
}
