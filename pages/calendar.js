import { useState } from "react";
import { useSession } from "next-auth/react";
import View from "../components/view";
import axios from "axios";

export default function Calendar() {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const { data: session } = useSession();
  const email = session?.user.email;

  async function createItem(ev) {
    ev.preventDefault();
    const item = { email, type, title, date };
    console.log("hello");
    await axios.post("/api/items", item);
  }

  return (
    <>
      <View>
        <div className="h1">calendar page</div>
        <form onSubmit={createItem} className="m-4">
          <p>Add cal item</p>
          <div className="m-2 h5 text-primary">Type</div>
          <input
            type="text"
            placeholder="Add type"
            value={type}
            onChange={(ev) => setType(ev.target.value)}
            className="w-75 rounded border shadow px-3 py-2 focus:border-primary"
          />
          <div className="m-2 h5 text-primary">Title</div>
          <input
            type="text"
            placeholder="Add title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            className="w-75 rounded border shadow px-3 py-2 focus:border-primary"
          />
          <div className="m-2 h6 text-secondary">
            <span className="h5 text-primary">Date/ Time </span>
            2023-06-12T01:23:45.678+90:00
          </div>
          <input
            type="text"
            placeholder="Add date/ time"
            value={date}
            onChange={(ev) => setDate(ev.target.value)}
            className="w-75 rounded border shadow px-3 py-2 focus:border-primary"
          />
          <br />
          <button type="submit" className="btn btn-primary my-3">
            Save
          </button>
        </form>
      </View>
    </>
  );
}
