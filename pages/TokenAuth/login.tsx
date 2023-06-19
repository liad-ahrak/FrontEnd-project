import React, { useState} from "react";
import Layout from "../../components/Layout";
import Router from "next/router";
const jwt = require('jsonwebtoken')
import Cookies from 'universal-cookie'; 

import LoginCom from '../../components/LoginCom'

const Login: React.FC = () => {
  
  return (
    <Layout>
      <LoginCom/>
    </Layout> 
  );
};


export default Login;