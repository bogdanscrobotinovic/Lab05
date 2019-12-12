import React, { Component } from "react";
class Nav extends Component {
  render() {
    const stil = {
      color: "white",
      backgroundColor: "#32C787"
    };

    return (
      <div style={stil}>
        <div className="container">
          <h5 className="pt-3 pb-3 mb-0 d-inline-block">
            Alegeri Europarlamentare 2019
          </h5>
        </div>
      </div>
    );
  }
}

export default Nav;
