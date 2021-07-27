import React from 'react';
import { connect } from 'react-redux'
import history from '../history';
import addClient from '../redux/actions/addClient';

class Cliente extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: 0,
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
    const { addUser } = this.props;
    addUser(this.state);
    history.push('/dashboard');
  }

  render(){
    
    return(
      <div>
        <label htmlFor="name">Nome
          <input id="name" type="text" name="name" onChange={ this.handleChange } />
        </label>
        <label htmlFor="age">Idade
          <input id="age" type="number" name="age" onChange={ this.handleChange } />
        </label>
        <label htmlFor="emil">E-mail
          <input id="email" type="email" name="email" onChange={ this.handleChange } />
        </label>
        <button onClick={ this.handleClick }>Cadastrar</button>
      </div>
    );
  }
}

 const mapDispatchToProps = (dispatch) => {
   return {
     addUser: (user) => dispatch(addClient(user)),
   }
}

export default connect(null, mapDispatchToProps)(Cliente);
