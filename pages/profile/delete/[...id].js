import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import View from "../../../components/view";
import { Button } from "react-bootstrap";

export default function Delete() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
  }, [id]);

  return (
    <View>
      <div className="container">
        <h1>Confirm delete</h1>
        <Button variant="danger" onClick={deleteProduct} className="me-3">
          Delete
        </Button>
        <Button variant="secondary" onClick={goBack}>
          Cancel
        </Button>
      </div>
    </View>
  );

  function goBack() {
    router.push("/profile");
  }

  async function deleteProduct() {
    const key = id[0];
    console.log(key);
    await axios.delete("/api/courses?id=" + key);
    goBack();
  }
}
