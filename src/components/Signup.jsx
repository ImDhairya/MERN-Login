// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Signup() {
//   const [email, setEmail] = useState("dsf");
//   const [password, setPassword] = useState("sdf");

//   async function submit(e) {
//     e.preventDefalut();
//     try {
//       axios
//         .post("http://localhost:4000/signup", {
//           email,
//           password,
//         })
//         .then((res) => {
//           if (res.data == "exists") {
//             alert("User already exists");
//           } else if ((res.data = "notexists")) {
//             history("/home", { state: { id: email } });
//           }
//         })
//         .catch((e) => {
//           alert("wrong details ");
//           console.log(e);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="Signup">
//       <h1>Signup Bhaisab</h1>
//       <form action="POST">
//         <input
//           type="email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           placeholder="Enter emeil"
//         />
//         <input
//           type="password"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//           placeholder="Enter password"
//         />

//         <input type="submit" onClick={submit} />
//       </form>

//       <br />
//       <p>OR</p>
//       <br />
//       <Link to="/login">Login </Link>
//     </div>
//   );
// }

// export default Signup;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:4000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
            return;
          } else if (res.data == "notexist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <h1>Signup</h1>

      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <input type="submit" onClick={submit} />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Login;
