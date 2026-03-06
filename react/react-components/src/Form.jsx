import { useState } from "react";

export default function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    status: "inactive",
  });
  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setUser({ ...user, [name]: value });
  }
  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <select name="status" value={user.status} onChange={handleChange}>
          <option value="active" >
            "Active"
          </option>
          <option value="inactive" >
            inactive
          </option>
        </select>
        <button>Submit</button>
      </form>
      <p>Preview Section : live</p>
      <p>"Profile Incomplete"</p>
    </>
  );
}
