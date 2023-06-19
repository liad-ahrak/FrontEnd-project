import React, { useState} from "react";
// import Layout from "../../components/Layout";
import Router from "next/router";
const jwt = require('jsonwebtoken')
import Cookies from 'universal-cookie'; 

export default function LoginCom (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cookie = new Cookies();
  const submitData = async (e) => {
    e.preventDefault();
    try{
      const body = { email, password };
        const responsePost = await fetch(`/api/loginUser`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      const data = await responsePost.json();
      const status = responsePost.status;
      if(status == 200){
        // alert("Login Success");
        // alert("this is the tokenLogin login from cookie:  " + data.token);
        cookie.set('tokenLogin', data.token);
        // alert("this is the tokenLogin login from cookie:  " + cookie.get('tokenLogin'));
        await Router.push("/");
      }
      else{
        alert("Login Failed");
      }
      
    }
    catch (error) {
      console.error(error);
    }    

  };

  return (
    <div>
      
        <div>
          <form onSubmit={submitData}>
            <h1>Login</h1>
            <input
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              type="text"
              value={email}

            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
              type="password"
            />
            <br/>
            <br/>
            <div>              
              <button type="submit" value="Login" disabled={!email || !password}>Log In</button>
            </div>
          </form>
        </div>
        
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border: none;
        }


        input {
          padding: 1rem 2rem;
          width: 100%;
          padding: 15px;
          margin: 5px 0 22px 0;
          display: inline-block;
          border: none;
          background: #f1f1f1;
        }

        .back {
          margin-left: 1rem;
          width: 100%;
        }

        button {
          background-color: #04AA6D;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
      }

      button:hover {
        opacity:1;
      }
        }

      `}</style>
    </div>
  );
}

