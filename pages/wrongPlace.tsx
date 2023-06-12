import React, { useState, Suspense, useRef, useEffect, use } from "react";
import Layout from "../components/Layout";

const Login: React.FC = () => {
    const src = "https://res.cloudinary.com/dsvjhuk25/video/upload/v1686492040/You_are_teasing_me_Naughty_Naughty_i9d4aw.mp4"
  return (
    <Layout>
        <div className="teasing-div">
            <h1>Please login first</h1>
            <div>You need to be authenticated to view this page.</div>
            <video src={src} autoPlay controls loop />
        </div>
    <style jsx>{`
        .teasing-div {
            text-align: center;
            /* Add other styles for the teasing-div */
        }   
    `}</style>
    </Layout>
  );
};


export default Login;