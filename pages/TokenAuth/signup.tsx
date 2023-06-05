import React, { useState, Suspense, useRef, useEffect } from "react";
import Layout from "../../components/Layout";
import Router from "next/router";
import { useSession } from "next-auth/react";
import ClipLoader from 'react-spinners/ClipLoader';


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const shoot = async () => {
    if (password != repeatPassword){
      alert('please make sure you repeated the password correctly')
    }

    // After fizing DB:

    // else{
    //   try {
    //     // TODO: turn password into Token
    //     const body = { name, email, password };
    //     const responsePost = await fetch(`/api/uploadUsers`, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(body),
    //     });
    //     const data = await responsePost.json();
    //     // postId = data.id;
    //     await Router.push("/drafts");
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

  }

  return (
    <Layout>
        <form>
          <div>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>

            <label><b>Name</b></label>
            <input type="text" name="name" 
            onChange={(e) => setName(e.target.value)}
            value={name} 
            required/> 

            <label><b>Email</b></label>
            <input type="text" name="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
            required/> 

            <label><b>Password</b></label>
            <input 
            type="password" 
            name="psw" 
            onChange={(e) => setPassword(e.target.value)}
            value={password} 
            required/> 
            
            <label ><b>Repeat Password</b></label>
            <input 
            type="password" 
            name="psw-repeat" 
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeatPassword} required/>
          
            
            <p>By creating an account you agree to our <a href="/TokenAuth/conditions">Terms & Privacy</a>.</p>

            <div>              
              <button type="submit" onClick={shoot} >Sign Up</button>
            </div>
          </div>
        </form>

      <style jsx>{`

      form {
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box
      }

      input[type=text], input[type=password] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
      }

      input[type=text]:focus, input[type=password]:focus {
        background-color: #ddd;
        outline: none;
      }

      hr {
        border: 1px solid #f1f1f1;
        margin-bottom: 25px;
      }

      /* Set a style for all buttons */
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

      /* Extra styles for the cancel button */
      .cancelbtn {
        padding: 14px 20px;
        background-color: #f44336;
      }

      /* Float cancel and signup buttons and add an equal width */
      .signupbtn {
        float: left;
        width: 50%;
      }

      /* Add padding to container elements */
      .container {
        padding: 16px;
      }

      /* Clear floats */
      .clearfix::after {
        content: "";
        clear: both;
        display: table;
      }

      /* Change styles for cancel button and signup button on extra small screens */
      @media screen and (max-width: 300px) {
        .cancelbtn, .signupbtn {
          width: 100%;
        }
      }

      `}
      </style>

    </Layout>
  );
};


export default Signup;