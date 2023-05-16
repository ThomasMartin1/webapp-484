import View from "../../components/view";
import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";

export default function NewCourse() {
  const { data: session } = useSession();
  const email = session?.user.email;
  const [courseName, setcourseName] = useState("");
  const [day, setDay] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [goBack, setGoBack] = useState(false);
  const router = useRouter();

  if (goBack) {
    router.push("/profile");
  }
  return (
    <View>
      <div className="container">
        <Form onSubmit={addCourse} className="mb-3">
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
              placeholder="Meeting day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
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
          <Button variant="primary" type="submit">
            Add Class
          </Button>
        </Form>
      </div>
    </View>
  );

  async function addCourse(ev) {
    ev.preventDefault();
    const course = { email, courseName, day, start, end };
    await axios.post("/api/courses", course);
    setGoBack(true);
  }
}
