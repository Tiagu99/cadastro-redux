import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  renderNoneClient() {
    return(
      <div>
        <h1>Nenhum cliente cadastrados</h1>
        <Link to="/register">Cadastrar Cliente</Link>
      </div>
    )
  }

  render(){
    console.log(this.props);
    const { users } = this.props;
    console.log(users <= 0);
    return(
      <div>
        <h1>Dashboard</h1>
        { (users.length <= 0) 
        ? this.renderNoneClient()
        : users.map((user) => <p>{user.name}</p>) }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, }
};

export default connect(mapStateToProps)(Dashboard);
