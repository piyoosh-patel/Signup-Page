import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupStart } from "../features/signup/userSlice";
import { Link, useNavigate  } from "react-router-dom";


const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!validateForm()) {
      
    }
     else {
      dispatch(signupStart(formData));
      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData }),
        })
          .then((response) => response.json())
          .then((json) =>{
            console.log(json);
             navigate('/dashBoard')
            //  localStorage.setItem('signUpId',json.id)
            // localStorage.setItem("isSignedUp", JSON.stringify(true)); 
            
            window.location.reload();
          }
        );
  
        if (!response.ok) {
          throw new Error("Signup failed");
        }
  
        setFormData("");
        setErrors(null);
        setSuccess(true);
      } catch (error) {
        setErrors("Signup failed. Please try again.");
        console.error("Signup error:", errors);
      }
    }

    

    // if (validateForm()) {
    //   console.log(formData);
    //   alert("Signup Successfully!!");
    //   dispatch(signupStart(formData));
    // }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      isValid = false;
      newErrors.firstName = (
        <div className="text-red-600">First Name is required*</div>
      );
    }

    if (!formData.lastName.trim()) {
      isValid = false;

      newErrors.lastName = (
        <div className="text-red-600">Last Name is required*</div>
      );
    }
    if (!formData.email.trim()) {
      isValid = false;
      newErrors.email = <div className="text-red-600">Email is required*</div>;
    }
    if (!formData.password.trim()) {
      isValid = false;
      newErrors.password = (
        <div className="text-red-600">Password is required*</div>
      );
    }
    setErrors(newErrors);
    return isValid;
  };
  // useEffect( () =>{
  //   const signUpId = localStorage.getItem('signUpId')
  //   if (signUpId) {
      
  //   } else {
  //     return navigate ('/dashBoard')
      
  //   }
  //  }) 

  return (
    <>
      <div className="mt-3 font-bold animate-bounce text-red-500 text-3xl">
        Welcome To Signup Page
      </div>

      <div className="flex justify-around w-full mt-9">
        <div className=" flex-auto">
          <img
            src="https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg"
            alt=""
            className="h-96 mt-5 rounded-2xl"
          />
        </div>
<div className="div1">
        <div className="flex-auto mt-10">
          <form onSubmit={handleSubmit} className="space-x-3 mt-12">
            <input
              type="text"
              className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-96 mt-4 ml-3 "
              placeholder="Enter First Name.."
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
            <br />
            <input
              type="text"
              className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  w-96 mt-4"
              placeholder="Enter Last Name.."
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
            <br />
            <input
              type="email"
              className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  w-96 mt-4"
              placeholder="Enter Email..."
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <br />
            <input
              type="password"
              className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  w-96 mt-4"
              placeholder="Enter Password..."
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
            <br />

            <button
              type="submit"
              className="text-white  mt-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              SignUp
              
            </button>
          </form>
          {success && <p>Signup successful!</p>}
          <div>
            {" "}
            Already Have an account?{" "}
            <Link to="/loginForm" className="text-blue-600 font-bold">
              Login
            </Link>{" "}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
