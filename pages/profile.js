import View from "../components/view";
import { useSession } from "next-auth/react";
import { useState } from "react";
export default function Profile() {
  const { data: session } = useSession();
  const [courseName, setcourseName] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

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
                <button onClick={addClass()} className="btn btn-primary">
                  Add Class
                </button>
                <button onClick={deleteClass()} className="btn btn-danger">
                  Delete Class
                </button>
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
                  max={23}
                  min={0}
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                ></input>

                <input
                  type="number"
                  id="end"
                  classNAme="form-control"
                  placeholder="End time"
                  max={23}
                  min={0}
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
            </table>
          </div>
        </div>
      </div>
    </View>
  );
}

function addClass() {}

function deleteClass() {}
function getCourses() {}
