import React, { useState } from "react";
import api from "../config/api";
import { svgs } from "../assets/asserts";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [togglePass, setTogglePass] = useState(true);
  const navigate = useNavigate()

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const formData = {
      schoolName: name,
      email,
      password,
    };

    await api
      .post("/create/school/login", formData)
      .then((res) => {
        setIsDisabled(false);
        console.log(res.data.success)
        if(res.data.success){
          const token = res.data.token
          const schoolId = res.data.school._id
          localStorage.setItem("token", token)
          localStorage.setItem("schoolId", schoolId)
          navigate(`/dashboard/${token}`)
        }
        else{
          alert(res.data.error)
        }
        console.log(res);
      })
      .catch((err) => {
        setIsDisabled(false);
        alert("Error: " + err.message);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center w-full my-24">
        <div className="border rounded-lg border-black px-8 py-5 w-[400px]">
          <h1 className="font-bold text-xl my-3 text-center">
            Login Your School
          </h1>
          <form onSubmit={handleSubmitForm}>
          <div>
              <label htmlFor="">Enter School Name: </label>
              <br />
              <input
                value={name}
                type="text"
                placeholder="Enter school name"
                className="input-register-school"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="">Enter Email: </label>
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter email"
                className="input-register-school"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="">Enter Password: </label>
              <br />
              <img
                src={togglePass ? svgs.eyeOpen : svgs.eyeClose}
                alt="togglePassword_icon"
                className="w-5 absolute right-[8px] top-[2.5rem] cursor-pointer"
                required
                onClick={() => setTogglePass(!togglePass)}
              />
              <input
                type={togglePass ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="input-register-school"
                required
              />
            </div>
            <div>
              <button
                disabled={isDisabled}
                className={`w-full my-3 py-2 text-white ${isDisabled?"bg-blue-500":"bg-blue-600"} rounded-md`}
                type="submit"
              >
                {isDisabled?"Logging...":"Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
