import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

export default function Context() {
  const UserContext = createContext();
  const [user, setUser] = useState("Jesse hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );

  function Component2() {
    return (
      <>
        <h1>component 2</h1>
        <Component3 />
      </>
    );
  }
  function Component3() {
    return (
      <>
        <h1>component 3</h1>
        <Component4 />
      </>
    );
  }
  function Component4() {
    return (
      <>
        <h1>component 4</h1>
        <Component5 />
      </>
    );
  }
  function Component5() {
    const user = useContext(UserContext);
    return (
      <>
        <h1>component 5</h1>
        <h2>{`hello ${user} again!`}</h2>
      </>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Context />);
