import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString()
    };
  }

  render() {
    const { date } = this.state;
    return (
      <div class="date">
        <p> Nous sommes le {date}</p>
      </div>
    );
  }
}

export default App;
