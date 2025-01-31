import { useState } from "React";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log("handled submit button click!!!");
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <h2>Login Component is created</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value.trim());
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value.trim());
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <p>Entered Username: {username}</p>
        <p>Entered Password: {password}</p>
      </div>
    </>
  );
};

export default Login;
