import React from "react";
import axios from "axios";
import { RequestEmail, RequestName, RequestPassword } from "../common/const";
import { TextField } from "@material-ui/core";
import { BaseButton } from "../components/atoms/BaseButton";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: RequestName.name,
      email: RequestEmail.email,
      password: RequestPassword.password,
    }
  }

  register = async() => {
    const api = 'http://localhost/api/register';
    const requestParam =this.createParam();
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
    data.append('name', this.state.name);
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
            placeholder="名前"
            type='text'
            variant='outlined'
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          >
          </TextField>
          <TextField
            placeholder="メールアドレス"
            type='email'
            variant='outlined'
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          >
          </TextField>
          <TextField
            placeholder="パスワード"
            type='password'
            variant='outlined'
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          >
          </TextField>
          <BaseButton
            onClick={this.register}
          >
            送信
          </BaseButton>
        </form>
      </>
    )
  }
}

export default RegisterForm;