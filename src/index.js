import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: "Legolas", apellidos: "Eldelbar", edad: 29 }
  }

  render() {
    return (
      <div>
      <div className="info"></div>
      <div className="panelPassword">
      <label>Nombre</label><input type="text" name="nombre" value={this.state.nombre} onInput={this.validar} />
      <div id="infoNombre"></div>
      <label>Apellidos</label><input type="text" name="apellidos" value={this.state.apellidos} onInput={this.validar} />
      <div id="infoApellidos"></div>
      <label>Edad</label><input type="number" name="edad" value={this.state.edad} step="1" onInput={this.validar} />
      <div id="infoEdad"></div>
      </div>
      </div>
      );
  }


  validar = (e) => {
    let valido = false,
    infoNombre = document.getElementById("infoNombre"),
    infoApellidos = document.getElementById("infoApellidos"),
    infoEdad = document.getElementById("infoEdad");
    switch (e.target.name) {
      case "nombre":
      if (e.target.value.length > 0 && e.target.value.length <=20) {
        infoNombre.textContent = "Nombre Valido";
        valido = true;
      }else{
        infoNombre.textContent = "Nombre Incorrecto, caracteres >20";
      }
      break;
      case "apellidos":
      if (e.target.value.length > 0 && e.target.value.length <=20) {
        infoApellidos.textContent = "Apellidos Validos";
        valido = true;
      }else{
        infoApellidos.textContent = "Apellidos Incorrectos, caracteres >20";
      }
      break;
      case "edad":
      if (e.target.value >= 0 && e.target.value <=150) {
        infoEdad.textContent = "EdadInvalida";
        valido = true;
      }else{
        infoEdad.textContent = "Edad incorrecta, 0<edad<150 ";
      }
      break;
    }
    if(valido)
      this.cambiarValores()
    else
      e.preventDefault();

  }


  cambiarValores(){
    this.setState(Object.assign({}, this.state, {
      nombre: document.getElementsByName("nombre")[0].value,
      apellidos: document.getElementsByName("apellidos")[0].value,
      edad: document.getElementsByName("edad")[0].value
    }));
    document.getElementsByClassName("info").textContent = "Modificado satisfactoriamente";
  }

}


ReactDOM.render(
  <Login />,
  document.getElementById('root')
  );

