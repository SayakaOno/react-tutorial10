import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "swordfish",
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    return (
      <div id="authorization">
        <h1>Contact</h1>
        <ul>
          <li>client@example.com</li>
          <li>555.555.5555</li>
        </ul>
      </div>
    );
  }
}

export default App;
