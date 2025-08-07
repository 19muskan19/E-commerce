import React, { useState } from "react";
// import './Form.css'

function Register() {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [address, setaddress] = useState("");
  let [number, setnumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);

    console.log(email);

    console.log(password);
    console.log(number);

    console.log(address);


const user = {
   name,
   email,
   password,
    number,
    address
  };

console.log(user)
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <label>Name:</label>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Email: </label>{" "}
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Password: </label>{" "}
        <input
          type="password"
          placeholder="enter your password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Mb. no: </label>{" "}
        <input
          type="text"
          placeholder="enter your number"
          onChange={(e) => {
            setnumber(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Address: </label>{" "}
        <input
          type="text"
          placeholder="enter your address"
          onChange={(e) => {
            setaddress(e.target.value);
          }}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
