import View from "../components/view";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Profile() {
  const { data: session } = useSession();
  const email = session?.user.email;
  const [courseName, setcourseName] = useState("");
  const [days, setDays] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [courses, setCourses] = useState([]);

  async function addCourse(ev) {
    ev.preventDefault();
    const course = { email, courseName, days, start, end };
    await axios.post("api/courses", course);
  }
  async function deleteCourse(id) {
    await axios.delete("api/courses?id=" + id);
  }

  function getCourses() {
    return (
      <>
        {courses.map((item, idx) => (
          <div className="rounded shadow border m-3 p-2 w-25" key={idx}>
            <div>{item.courseName}</div>
            <div>{item.days}</div>
            <div>{item.start}</div>
            <div>{item.end}</div>

            <button
              onClick={() => deleteCourse(item._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        ))}
      </>
    );
  }

  useEffect(() => {
    axios.get("/api/courses").then((response) => {
      setCourses(response.data);
    });
  }, []);

  return (
    <View>
      <div>
        <div className="border justify-content-start ">
          <div className="m-auto p-2">
            <img src={session?.user?.image}></img>
          </div>

          <div className="m-auto">
            <form>
              <div className="input-group m-auto p-2 b-1">
                <button onClick={addCourse} className="btn btn-primary">
                  Add Class
                </button>

                <button onClick={deleteCourse} className="btn btn-danger">
                  Delete
                </button>
                <input
                  type="text"
                  id="day"
                  className="form-control"
                  placeholder="Class Day"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                ></input>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Class Name"
                  value={courseName}
                  onChange={(e) => setcourseName(e.target.value)}
                ></input>
                <input
                  type="number"
                  id="start"
                  className="form-control"
                  placeholder="Start time"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                ></input>

                <input
                  type="number"
                  id="end"
                  classNAme="form-control"
                  placeholder="End time"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                ></input>
              </div>
            </form>
          </div>

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
                  <th>{getCourses()}</th>
                  <th>{getCourses()}</th>
                  <th>{getCourses()}</th>
                  <th>{getCourses()}</th>
                  <th>{getCourses()}</th>
                  <th>{getCourses()}</th>
                  <th>{getCourses()}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </View>
  );
}
