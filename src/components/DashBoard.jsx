import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie';


function DashBoard() {
  const logout = () => {
    
    // localStorage.removeItem("isLoggedIn");  //using localstorage
    // window.location.reload(); 

    Cookies.remove("token");              //using cookie
    window.location.href = '/loginForm';
  };

  return (
    <div>
      <h1 className="text-white font-extrabold text-3xl">
        Welcome to Demo Dashboard
      </h1>
     <div className="flex mt-7 ">
      <div className="flex-6 float-start text-purple-600 font-bold text-left m-3 bg-slate-400 p-3">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro omnis odio sit fuga voluptatibus molestiae. Et eius, incidunt ea dolorem repellat aliquam, labore dolorum saepe officiis a minus nulla maxime provident rem quo id officia similique, quia eaque distinctio amet necessitatibus dicta. Sint, temporibus rem provident nisi sed qui harum nesciunt eum. Inventore iusto eum est eveniet quis, facilis amet? </p>
      </div>
      <div className="flex-row-reverse text-orange-300 font-bold text-right p-3 bg-orange-950 m-2 ">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque odit voluptatem quam aliquam voluptatum temporibus, quidem laboriosam eveniet dolorum optio totam ad mollitia numquam sequi veniam. Id ducimus vitae, hic consequuntur dolore explicabo dicta officiis reiciendis sapiente optio modi ratione debitis tempora ut accusamus eaque illum ipsa eius ad harum quidem! Officia, quae. Libero tempore corrupti praesentium voluptatibus nemo ipsum? Asperiores ab, ullam molestias sint sequi iusto odit veniam expedita ratione odio. Qui beatae atque, ab expedita ad aperiam cum.</p>
      </div>
     </div>
      <button onClick={logout}
        type="submit"
        className="text-white  mt-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Logout
      </button  >
      <Link to='/firstPage'>
      
     <button  className="text-white  mt-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-8">Next</button>
      </Link>
    </div>
  );
}

export default DashBoard;
