import React, { useState } from "react";

function Update() {
  const [users, setUsers] = useState([
    { city: "Toshkent", yil: 2000, id: 1 },
    { city: "SAmarqdn", yil: 1990, id: 2 },
    { city: "Xiva", yil: 1998, id: 3 },
    { city: "Buxoro", yil: 1994, id: 4 },
    { city: "Qoqon", yil: 2004, id: 5 },
  ]);
  const handleEdit = () => {
    const newUser = users.map((user) => {
      if (user.id === 3) {
        return { ...user, yil: 3000 };
      }
      return user;
    });

    setUsers(newUser);
    
  };
  return (
    <div>
      <button onClick={handleEdit}>edit</button>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>country: {user.city}</h2>
            <h2>year: {user.yil}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Update;
