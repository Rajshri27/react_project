import axios from "axios";
import React, { useEffect, useState } from "react";

function EmployeeList() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const filteredUsers = response.data.map((user) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
        }));
        setEmployee(filteredUsers); 
        console.log(employee)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div>
     <div className="header">
     <h2 className="header_text">Employee List</h2>
     </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>USER NAME</th>
                            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
                          {employee.map((item, index) => (
                            <tr key={index}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.username}</td>
                              <td>{item.email}</td>
                            </tr>
                          ))}
                        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;