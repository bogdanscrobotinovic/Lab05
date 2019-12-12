import React, { Component } from "react";
import ListaSel from "./listasel";

class GrupListaSel extends Component {
  render() {
    let { listaJ, listaU, listaL } = this.props;
    return (
      <>
        <div className="col-sm-3" key="jud">
          <ListaSel eticheta="JUDEȚ" nume="jud" lista={listaJ} />
        </div>
        <div className="col-sm-3" key="uat">
          <ListaSel eticheta="UAT" nume="uat" lista={listaU} />
        </div>
        <div className="col-sm-3" key="loc">
          <ListaSel eticheta="LOCALITATE" nume="loc" lista={listaL} />
        </div>
      </>
    );
  }
}

export default GrupListaSel;
