import React, { Component } from "react";
import Nav from "./nav";
import ListaCarduri from "./listacarduri";
import GrupListaSel from "./gruplistasel";
import "./App.css";

class App extends Component {
  render() {
    let carduri = [
      {
        culoare: "#2196F3",
        numar: 609473,
        text: "Înscriși pe liste permanente și speciale"
      },
      {
        culoare: "#00BCD4",
        numar: 291826,
        text: "Votanți pe liste permanente și speciale"
      },
      {
        culoare: "#32C787",
        numar: 79235,
        text: "Votanți pe liste suplimentare"
      },
      { culoare: "#8BC34A", numar: 1408, text: "Votanți cu urna mobilă" },
      { culoare: "#FFC107", numar: 372469, text: "Total votanți" },
      { culoare: "#FF9800", numar: 61.11, text: "Prezența la urne (%)" }
    ];

    let listaJud = [
      { nume: "Selectează județul", id: 10 },
      { nume: "Alba", id: 11 },
      { nume: "Argeș", id: 12 },
      { nume: "Arad", id: 13 },
      { nume: "Bacău", id: 14 },
      { nume: "Bihor", id: 15 }
    ];

    let listaUAT = [
      { nume: "Toate UAT-urile", id: 100 },
      { nume: "Almaș", id: 101 },
      { nume: "Apateu", id: 102 },
      { nume: "Archiș", id: 103 },
      { nume: "Bârsa", id: 104 },
      { nume: "Bârzava", id: 105 },
      { nume: "Bata", id: 106 }
    ];

    let listaLoc = [
      { nume: "Toate localitățile", id: 110 },
      { nume: "Aciuța", id: 111 },
      { nume: "Adea", id: 112 },
      { nume: "Agrișu mare", id: 113 },
      { nume: "Agrișu mic", id: 114 },
      { nume: "Aldești", id: 115 }
    ];

    return (
      <>
        <Nav />
        <div className="container">
          <div className="row pt-5">
            <ListaCarduri sirCarduri={carduri} />
          </div>
        </div>
        <div className="container">
          <div className="row pt-5">
            <GrupListaSel
              listaJ={listaJud}
              listaU={listaUAT}
              listaL={listaLoc}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
