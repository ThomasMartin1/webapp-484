import View from "../components/view";
import { useSession } from "next-auth/react";
import Dropdown from "react-bootstrap/Dropdown";
export default function Profile() {
  const { data: session } = useSession();

  return (
    <>
      <View>
        <div>
          <div className="border justify-content-start ">
            <div className="m-auto p-2">
              <img src={session?.user?.image}></img>
            </div>

            <div>
              <form>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item id="Monday" href="#/action-1">
                      Monday
                    </Dropdown.Item>
                    <Dropdown.Item id="Tuesday" href="#/action-2">
                      Tuesday
                    </Dropdown.Item>
                    <Dropdown.Item id="Wednesday" href="#/action-3">
                      Wednesday
                    </Dropdown.Item>
                    <Dropdown.Item id="Thursday" href="#/action-1">
                      Thursday
                    </Dropdown.Item>
                    <Dropdown.Item id="Friday" href="#/action-1">
                      Friday
                    </Dropdown.Item>
                    <Dropdown.Item id="Saturday" href="#/action-1">
                      Saturday
                    </Dropdown.Item>
                    <Dropdown.Item id="Sunday" href="#/action-1">
                      Sunday
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="input-group m-auto p-2 b-1">
                  <button className="btn btn-primary">Add Class</button>
                  <button className="btn btn-danger">Delete Class</button>

                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Class Name"
                  ></input>

                  <input
                    type="number"
                    id="start"
                    class="form-control"
                    placeholder="Start time"
                    max={23}
                    min={0}
                  ></input>
                  <input
                    type="number"
                    id="end"
                    class="form-control"
                    placeholder="End time"
                    max={23}
                    min={0}
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
    </>
  );
}
function DeleteClass() {}
