import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function registerUser(ev) {
    ev.preventDefault();
    axios.post("/register", {
      name,
      email,
      password,
    });
  }

  return (
    <div className="mt-4 grow flex item-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="name"
            placeholder="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          ></input>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          ></input>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          ></input>
          <button className="primary" type="register">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already a Member? {""}
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
