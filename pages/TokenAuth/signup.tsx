import React, { useState, Suspense, useRef, useEffect } from "react";
import Layout from "../../components/Layout";
import Router from "next/router";
import ClipLoader from 'react-spinners/ClipLoader';
import { on } from "events";

import SignupCom from '../../components/SignupCom'


const Signup = () => {
  return (
    <Layout>
      <SignupCom/>
    </Layout>
  );
};


export default Signup;