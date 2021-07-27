import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div>
        <header>
          <Link to="/login">Login</Link>
        </header>
      </div>
    );
  }
}

export default Home;
