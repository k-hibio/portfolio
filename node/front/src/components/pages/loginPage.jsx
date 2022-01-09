import React from "react";
import axios from 'axios';

function loginPage() {
  async function login() {
    const response = await axios.post('http://localhost/api/login');
    console.log(response)
  }
  login()
}

export default loginPage;