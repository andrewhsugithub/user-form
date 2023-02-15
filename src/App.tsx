import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import ListUser from "./components/listUser/ListUser";

function App() {
  const [users, setUsers] = useState<RawUser[]>([]);

  const addUser = (user: RawUser) => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <div className="App">
      <Form addUser={addUser} />
      {users.length > 0 && (
        <ul className="container listUser__container">
          {users.map((user) => (
            <ListUser key={user.id} username={user.username} age={user.age} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
