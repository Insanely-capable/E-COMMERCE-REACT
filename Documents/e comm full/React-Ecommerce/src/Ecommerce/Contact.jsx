import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [file, setFile] = useState();
  console.log(name);
  console.log(email);
  console.log(number);

  function handleSubmit(e) {
    e.preventDefault();''
    console.log(e);
  }

  return (
    <>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Mob.."
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <br />
        <input type="file" />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default Contact;
