import "./App.css";
// import { Users } from "./users";
import { useState } from "react";
import { Table } from "./Table";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  //   console.log(query);

  //   console.log(
  //     Users.filter((users) => users.first_name.toLowerCase().includes("fe"))
  //   );

  // const search_keys = ["first_name", "last_name", "email"];

  // return matching users of query
  //   const search = (data) => {
  //     return data.filter(
  //       (item) =>
  //         item.first_name.toLowerCase().includes(query) ||
  //         item.last_name.toLowerCase().includes(query) ||
  //         item.email.toLowerCase().includes(query)
  //     );
  //   };

  // const search = (data) => {
  //   return data.filter((item) =>
  //     search_keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`http://localhost:5000?q=${query}`);
      setData(response.data);
    };

    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Table data={data} />

      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li className="list-item" key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
