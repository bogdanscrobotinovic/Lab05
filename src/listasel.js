import React, { Component } from "react";
import "./listasel.css";

class ListaSel extends Component {
  render() {
    const { eticheta, nume, lista } = this.props;
    let listaVal = lista.map(item => (
      <option value={item.id} key={item.id}>
        {item.nume}
      </option>
    ));

    return (
      <div className="listasel form-group">
        <label htmlFor={nume}>{eticheta}</label>
        <select className="form-control" id={nume}>
          {listaVal}
        </select>
      </div>
    );
  }
}

export default ListaSel;
