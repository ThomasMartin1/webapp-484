import View from "../components/view";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Row, Table, Form, Col } from "react-bootstrap";

export default function Profile() {
  const { data: session } = useSession();
  const email = session?.user.email;
  const [courseName, setcourseName] = useState("");
  const [days, setDays] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [courses, setCourses] = useState([]);

  const [click, setClick] = useState(0);
  const handleClick = () => setClick(click + 1);

  async function addCourse(ev) {
    ev.preventDefault();
    const course = { email, courseName, days, start, end };
    await axios.post("api/courses", course);
  }

  async function deleteCourse(id) {
    await axios.delete("api/courses?id=" + id);
  }

  useEffect(() => {
    axios.get("/api/courses").then((response) => {
      setCourses(response.data);
    });
  }, [click]);

  return (
    <View>
      <div className="container">
        <img className="my-3 p-2" src={session?.user?.image}></img>

        <Form className="mb-3">
          <Form.Group className="mb-3" controlId="form.CourseName">
            <Form.Label>Course name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Course name"
              value={courseName}
              onChange={(e) => setcourseName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="form.Days">
            <Form.Label>Meeting days</Form.Label>
            <Form.Control
              type="text"
              placeholder="Meeting days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="form.Start">
            <Form.Label>Start time</Form.Label>
            <Form.Control
              type="number"
              placeholder="Start time"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="form.End">
            <Form.Label>End time</Form.Label>
            <Form.Control
              type="number"
              placeholder="End time"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={addCourse} className="rounded">
          Add Class
        </Button>
        <Button
          variant="success"
          onClick={handleClick}
          className=" rounded mx-2"
        >
          Refresh
        </Button>

        <Table
          striped
          bordered
          responsive
          className="rounded shadow w-100 my-5"
        >
          <thead>
            <tr className="">
              <th className="col">Monday</th>
              <th className="col">Tuesday</th>
              <th className="col">Wednesday</th>
              <th className="col">Thursday</th>
              <th className="col">Friday</th>
              <th className="col">Saturday</th>
              <th className="col">Sunday</th>
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
        </Table>
        <div className="h3 g-4">Edit Courses</div>
        {courseList()}
      </div>
    </View>
  );

  function filterCourses(weekDay) {
    return (
      <>
        {courses.map(function (course) {
          if (course.days.includes(weekDay) && course.email === email) {
            return (
              <div className="rounded shadow border my-3 p-2" key={course._id}>
                <div className="mb-0 text-nowrap">{course.courseName}</div>
                <div className="mb-0 text-nowrap">
                  {course.start} - {course.end}
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }

  function courseList() {
    return (
      <>
        <Row xs={1} md={2} className="g-4">
          {courses.map(function (course) {
            if (course.email === email) {
              return (
                <Col className="w-auto" key={course._id}>
                  <Card
                    key={course._id}
                    className="text-center h-100"
                    style={{ width: "12rem" }}
                  >
                    <Card.Header>{course.courseName}</Card.Header>
                    <Card.Body>
                      <Card.Text className="overflow-x-hidden">
                        {course.days}
                      </Card.Text>
                      <Card.Text>
                        {course.start} - {course.end}
                      </Card.Text>
                      <Button
                        variant="danger"
                        onClick={() => deleteCourse(course._id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          })}
        </Row>
      </>
    );
  }
}
