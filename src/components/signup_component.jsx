import React, { useState } from "react";
import './style.css'


export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");



  const handleClick = () => {
    alert('Signed Up');
  };
  const handleSubmit = (e) => {
    if (userType === "Admin" && secretKey !== "Yazid") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, address, dob, gender, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          address,
          dob,
          gender,
          password,
          userType
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };


  return (
    <div className="container py-5 px-5 bg"><br></br>
      <div className="row justify-content-between bg-white rounded-start-4">
        <div className="col-lg-7 d-flex justify-content-center align-items-center">
          <div className="login-card py-lg-0 py-5"><br></br>
            <h2 className="fw-semibold ">Welcome to BOOTCART</h2>
            <p className="fw-light">Create New Account</p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-12">
                <label className="radio">
  <input type="radio" name="option" value="User"onChange={(e) => setUserType(e.target.value)} />
  <span className="radio-button"></span>
  User
</label>

<label className="radio">
  <input type="radio" name="option" value="Admin" onChange={(e) => setUserType(e.target.value)} />
  <span className="radio-button"></span>
Admin
</label>
</div>
                

                {userType === "Admin" ? (
                  <div className="mb-3 col-12">
                    <label for="" className="mb-1 fw-medium">
                      Secret Key
                    </label>
                    <input type="text" className="form-control" placeholder="Admin" onChange={(e) => setSecretKey(e.target.value)} />
                  </div>) : null}

                <div className="mb-3 col-12">
                  <label for="" className="mb-1 fw-medium">First Name</label>
                  <input type="text" className="form-control" placeholder="Enter Email" onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="mb-3 col-12">
                  <label for="" className="mb-1 fw-medium">Last Name</label>
                  <input type="text" className="form-control" placeholder="Enter Email" onChange={(e) => setLname(e.target.value)} />
                </div>
                <div className="mb-3 col-12">
                  <label for="" className="mb-1 fw-medium">Email</label>
                  <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3 col-12">
                  <label for="" className="mb-1 fw-medium">Address</label>
                  <input type="text" className="form-control" placeholder="Enter Email" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="mb-3 col-12">
                  <label for="" className="mb-1 fw-medium">DOB</label>
                  <input type="text" className="form-control" placeholder="Enter Email" onChange={(e) => setDob(e.target.value)} />
                </div>
                <div className="mb-3 col-12">
                  <label for="" className="mb-1 fw-medium">Gender</label>
                  <input type="text" className="form-control" placeholder="Enter Email" onChange={(e) => setGender(e.target.value)} />
                </div>

                <div className="col-12">
                  <label for="" className="mb-1 fw-medium">Password</label>
                  <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                </div>

              </div>
              <button type="submit" className="btn mt-4 w-100"><text className="color">Sign UP</text></button>

            </form>
            <p className="text-center signup mt-4 ">Already Have An Account? <a href="/sign-in"
              className="text-decoration-none fw-semibold">Sign In</a></p>
          </div>
        </div>

      </div>
    </div>

  )

}





