import { ReactDOM } from "react";

export default function day() {
  const array = ["1", "2", "3", "4", "5", "6", "7"];
  array.map((n) => {
    var test = React.createElement("span", null, n);
    ReactDOM.render(test, document.getElementById(n));
  });
  return <h2>test</h2>;
}
