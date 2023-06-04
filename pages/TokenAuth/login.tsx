import React, { useState, Suspense, useRef, useEffect, use } from "react";
import Layout from "../../components/Layout";
import Router from "next/router";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formData = new FormData();
  const submitData = async (e: React.SyntheticEvent) => {
    
  };

  return (
    <Layout>
      
        <div>
          <form onSubmit={submitData}>
            <h1>Login</h1>
            <input
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              type="text"
              value={username}

            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
            />
            <br/>
            <br/>
            <div>              
              <button type="submit" value="Login" disabled={!username || !password}>Sign Up</button>
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
    </Layout>
  );
};


export default Login;