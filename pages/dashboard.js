import View from "../components/view";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const { data: session } = useSession();
  const [items, setItems] = useState([]);
  const email = session?.user.email;

  useEffect(() => {
    axios.get("/api/items").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <>
      <View>
        <h1>{session?.user.name}'s Dashboard</h1>
        {showItems()}
      </View>
    </>
  );

  function showItems() {
    return (
      <>
        {items.map((item, idx) => (
          <div className="rounded shadow border m-3 p-2 w-25" key={idx}>
            <div>{item.type}</div>
            <div>{item.title}</div>
            <div>{item.date}</div>
          </div>
        ))}
      </>
    );
  }
}
