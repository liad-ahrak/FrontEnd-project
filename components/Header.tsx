import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
// import { signOut, useSession } from "next-auth/react";
const jwt = require('jsonwebtoken')
import Cookies from 'universal-cookie';
import cookie from "js-cookie";
import { get } from "http";

const Header: React.FC = (props) => {
  const [cookieState, setCookieState] = useState(null);
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  // const {data: session, status} = useSession();
  const cookies = new Cookies();
  const tokenLogin =  cookies.get('tokenLogin')// ||  props.token;
  const getToken = (tokenLogin: string | null ) => {
    try{
      return jwt.decode(tokenLogin, process.env.SECRET);
    }
    catch (error) {
      return undefined;
    }
  }
  const verToken = getToken(tokenLogin);
  useEffect(() => {
    setCookieState(getToken(tokenLogin));}, []);
  const removeCookie = (removeC : string) => {
    cookies.remove(removeC);
  }
  
  let left = (
    <div className="left">
      <Link href="/" legacyBehavior>
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
        #light {
            background: rgba(0, 0, 0, 0.05);
          }
          #dark  {
            background: rgba(0, 0, 0, 0.55);
          }
      `}</style>
    </div>
  );

  let right = null;

  

  // if (status === 'loading') {
  //   left = (
  //     <div className="left">
  //       <Link href="/" legacyBehavior>
  //         <a className="bold" data-active={isActive("/")}>
  //           Feed
  //         </a>
  //       </Link>
  //       <style jsx>{`
  //         .bold {
  //           font-weight: bold;
  //         }

  //         a {
  //           text-decoration: none;
  //           color: #000;
  //           display: inline-block;
  //         }

  //         .left a[data-active="true"] {
  //           color: gray;
  //         }

  //         a + a {
  //           margin-left: 1rem;
  //         }
  //         #light {
  //           background: rgba(0, 0, 0, 0.05);
  //         }
  //         #dark  {
  //           background: rgba(0, 0, 0, 0.55);
  //         }
  //       `}</style>
  //     </div>
  //   );
  //   right = (
  //     <div className="right">
  //       <p>Validating session ...</p>
  //       <style jsx>{`
  //         .right {
  //           margin-left: auto;
  //         }
  //       `}</style>
  //     </div>
  //   );
  // }

  if ( !cookieState) {//!session ||
    right = (
      <div className="right">
        <Link href="/TokenAuth/login" legacyBehavior>
          <a data-active={isActive("/login")}>Log in</a>
        </Link>
        <Link href="/TokenAuth/signup" legacyBehavior>
          <a data-active={isActive("/signup")}>Sign up</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }
          #light {
            background: rgba(0, 0, 0, 0.05);
          }
          #dark  {
            background: rgba(0, 0, 0, 0.55);
          }
        `}</style>
      </div>
    );
  }

  if (cookieState) {
    const image_src = cookieState?.photo ? cookieState?.photo : "https://res.cloudinary.com/dsvjhuk25/image/upload/v1686493759/profileImage_dufqya.png"
    left = (
      <div className="left">
        <Link href="/profile" legacyBehavior>
          <a data-active={isActive("/profile")}>
            {/* <Tooltip content="Profile"> */}
              <img className="profile-picture" src={image_src} height={35} width={35} />
            {/* </Tooltip> */}
          </a>
        </Link>
        
        <Link href="/" legacyBehavior>
          <a className="bold" data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <Link href="/drafts" legacyBehavior>
          <a data-active={isActive("/drafts")}>My drafts</a>
        </Link>
        <style jsx>{`
          .profile-picture{
            height: 40px; 
            weight: 40px;
            border-radius: 50%;
          }
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          .left a[data-active="true"] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
          #light {
            background: rgba(0, 0, 0, 0.05);
          }
          #dark  {
            background: rgba(0, 0, 0, 0.55);
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p>
          {cookieState?.name} {(cookieState?.email)}{/* {session.user?.name} ({session.user?.email}) */}
        </p>
        <Link href="/create" legacyBehavior>
          <button>
            <a>New post</a>
          </button>
        </Link>
        <button onClick={() =>{
          setCookieState(null);
          removeCookie('tokenLogin');
          router.push('/');//TokenAuth/login
        } }>
          <a>Log out</a>
        </button>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          p {
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }

          button {
            border: none;
          }
          #light  {
            background: rgba(0, 0, 0, 0.05);
          }
          #dark  {
            background: rgba(0, 0, 0, 0.55);
          }
        `}</style>
      </div>
    );
  }

  return (
    <nav>
      {/* {tokenLogin ? <h1>{cookieState}</h1> : <h1> heyyy </h1>} */}
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
        #light {
          background: rgba(0, 0, 0, 0.05);
        }
        #dark  {
          background: rgba(0, 0, 0, 0.55);
        }
      `}</style>
    </nav>
  );
};

export default Header;
