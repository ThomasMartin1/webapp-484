import View from "../components/view";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button, Card, Row, Table, Col, Image } from "react-bootstrap";

export default function Profile() {
  const { data: session } = useSession();
  const email = session?.user.email;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("/api/courses").then((response) => {
      setCourses(response.data);
    });
  }, []);

  return (
    <View>
      <div className="container">
        <Image className="my-3 p-2" src={session?.user?.image} />
        <div className="d-inline mx-3 h4">{session.user.name}</div>
        <hr></hr>
        <div className="row justify-content-between">
          <h1 className="col-4">Course Schedule</h1>
          <div className="col-2">
            <Link href={"/profile/new"} className="ms-5 btn btn-primary">
              Add course
            </Link>
          </div>
        </div>
        <Table
          striped
          bordered
          responsive
          className="rounded shadow w-100 my-3"
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
    const list = courses;
    return (
      <>
        {list.map(function (course) {
          console.log(course.data);
          if (course.day === weekDay && course.email === email) {
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
    const list = courses;
    return (
      <>
        <Row xs={1} md={2} className="g-4">
          {list.map(function (course) {
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
                        {course.day}
                      </Card.Text>
                      <Card.Text>
                        {course.start} - {course.end}
                      </Card.Text>
                      <Link
                        href={"/profile/delete/" + course._id}
                        className="btn btn-danger"
                      >
                        Delete
                      </Link>
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
