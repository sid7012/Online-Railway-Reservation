import { Link } from "react-router-dom";
import "./Signin.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../config";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signinUser = () => {
    if (email.length === 0) toast.warning("Please enter email-id");
    else if (password.length === 0) toast.warning("Please enter password");
    else {
      const body = {
        email,
        password,
      };

      console.log(body);
      const url = `${URL}/users/findByEmail`;

      axios.post(url, body).then((response) => {
        const result = response.data;

        if (result["status"] === "success") {
          toast.success("Signed in successfully");

          sessionStorage["id"] = result.data.id;
          sessionStorage["firstName"] = result.data.firstName;
          sessionStorage["email"] = result.data.email;
          if(result.data.role === "admin")
            sessionStorage["loginStatus"] = 1;
          if(result.data.role === "user")
            sessionStorage["loginStatus"] = 2;

          // console.log(sessionStorage.id)
          // console.log(sessionStorage.firstName)
        } else {
          toast.error(result["error"]);
        }

        (result.data.role === "admin") ? navigate("/adminfunctinality") : navigate("/userfunctinality")
        document. location. reload() 
        console.log(result);
      });
    }
  };

  return (
    <div className='background-img example'>
      <br>
      </br>

      <div className="container" style={{ font: "50px", color: "black", fontFamily: "inherit" }} >
        <h1>Login</h1>
        <br>

        </br>

        <div className="row" style={{ color: "white" }}>
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div>
                <label htmlFor="" className="label-control">
                  Email Id :
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
              <br>
              </br>

              <div>
                <label htmlFor="" className="label-contor">
                  Password :
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                />
              </div>
              <br>
              </br>
              <div className="mb-3">
                <div style={{ color: "white" }}>
                  Don't have an account ? <Link to="/signup"> Signup here</Link>
                </div>
                <div style={{ color: "white" }}>
                  Forgot Password ? <Link to="/forgetPassword"> Click here to reset your password</Link>
                </div>
                <br></br>
                <button
                  onClick={signinUser}
                  className="btn btn-primary"
                  style={{ borderRadius: "30px", marginTop: "10px", width:"400px" }}>
                  Submit
                </button> 
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
