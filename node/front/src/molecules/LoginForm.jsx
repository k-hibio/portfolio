import { TextField } from "@material-ui/core";
import React from "react";
import axios from "axios";
import { RequestEmail, RequestPassword } from "../common/const";
import { BaseButton } from "../components/atoms/BaseButton";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: RequestEmail.email,
      password: RequestPassword.password,
    }
  }

  login = async() => {
    const api = 'http://localhost/api/login';
    const requestParam = this.createParam();
    const response = await axios.post(api, requestParam)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  createParam = () => {
    const data = new FormData();
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    return data;
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form>
          <TextField
            placeholder="メールアドレス"
            type='email'
            variant='outlined'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          >
          </TextField>
          <TextField
            placeholder="パスワード"
            type='password'
            variant='outlined'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          >
          </TextField>
          <BaseButton
            onClick={this.login}
          >
            送信
          </BaseButton>
        </form>
      </>
    )
  }
}

export default LoginForm;