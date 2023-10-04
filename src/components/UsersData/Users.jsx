import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  // const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  // const handleFetchUsers = async () => {
  //   if (!showUsers) {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setUsers(data);
  //   }
  //   setShowUsers(!showUsers);
  // };

  return (
    <div>
      <h1>Users:</h1>
      {/* <button onClick={handleFetchUsers}>
        {showUsers ? "Hide Users" : "Get all users"}
      </button>
      {showUsers && ( */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      {/* )} */}
    </div>
  );
};

export default Users;
