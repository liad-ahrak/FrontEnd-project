import React, { useState } from "react";
import Router from "next/router";
import ClipLoader from 'react-spinners/ClipLoader';



export default function SignupCom (){
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  // const imgFormData = typeof FormData !== "undefined" ? new FormData() : null;
  const [sendSign, setSendSign] = useState(false);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const shoot = async (e) =>{
    e.preventDefault();
    if (password != repeatPassword){
      alert('please make sure you repeated the password correctly')
    }
    else if (isValidEmail(email) == false){
      alert('please make sure you entered a valid email')
    }
    else{
      let photo = null;
      try {
        if(profilePicture){
          const formData = new FormData();
          formData.append('inputFile', profilePicture);
          try {
            const responsePhoto = await fetch("/api/uploadPhoto", {
              method: "POST",
              body: formData
            });
            const data = await responsePhoto.json();
            photo = data;
            alert('photo uploaded successfully')
          } catch (error) {
            console.error(error);
          }
        }
        const body = { userName, password, email, name ,photo};
        const responsePost = await fetch(`/api/newUser`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await responsePost.json();
        const status = responsePost.status;
        console.log(status)
        if (status == 201){
          alert(data.message) 
          console.log('you have successfully signed up')
          await Router.push("/TokenAuth/login");
          
        }
        else{  
          if(status == 400){
            alert(data.message);
          }
          else{alert(`something went wrong, please try again later ${status}`);}
        }
        // postId = data.id;
        // await Router.push("/drafts");
      } catch (error) {
        console.log('this is an error')
        console.error(error);
      }
    }

  }
  const onChangeProfileP = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setProfilePicture(file);
  };
  

  return (
    <div>
      <form>
        <div>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label><b>Name</b></label>
          <input type="text" name="name" 
          onChange={(e) => setName(e.target.value)}
          value={name} 
          placeholder="Name"
          required/> 

          <label><b>User Name</b></label>
          <input type="text" name="userName" 
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="User Name" 
          required/> 


          <label><b>Email</b></label>
          <input type="text" name="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email} 
          placeholder="Email"
          required/> 

          <label><b>Password</b></label>
          <input 
          type="password" 
          name="psw" 
          onChange={(e) => setPassword(e.target.value)}
          value={password} 
          placeholder="Password"
          required/> 
          
          <label ><b>Repeat Password</b></label>
          <input 
          type="password" 
          name="psw-repeat" 
          onChange={(e) => setRepeatPassword(e.target.value)}
          value={repeatPassword} 
          placeholder="Repeat Password"
          required/>

          <input
          type="file"
          accept="image/*"
          onChange={onChangeProfileP}            
          />
        
          
          <p>By creating an account you agree to our <a href="/TokenAuth/conditions">Terms & Privacy</a>.</p>

          <div>              
            <button type="submit" data-testid="signup-button" onClick={shoot} disabled={!name || !userName || !email || !password || !repeatPassword} >Sign Up</button>
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



    </div>
  );
};
