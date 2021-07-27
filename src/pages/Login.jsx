import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      loged: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.setState({
      loged: true,
    });
  }

  render() {
    const { loged } = this.state;
    if (loged) return <Redirect to="/dashboard" />
    return(
      <div>
          <label htmlFor="email">E-mail
            <input id="email" type="email" name="email" onChange={ this.handleChange } />
          </label>
          <label htmlFor="password">Senha
            <input id="password" type="password" name="password" onChange={ this.handleChange } />
          </label>
          <button onClick={this.handleClick}>Entrar</button>
      </div>
    );
  }
}

export default Login;
