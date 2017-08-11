import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';

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
          <button id="enviar" onClick={this.sendInfo}>GETALL</button>
        </div>
      </div>
    );
  }


  validar = (e) => {
    let valido = false,
      valorInput = e.target.value,
      infoNombre = document.getElementById("infoNombre"),
      infoApellidos = document.getElementById("infoApellidos"),
      infoEdad = document.getElementById("infoEdad");
    switch (e.target.name) {
      case "nombre":
        if (valorInput.length > 0 && valorInput.length <= 20) {
          infoNombre.textContent = "Nombre Valido";
          valido = true;
        } else {
          infoNombre.textContent = "Nombre Incorrecto, caracteres >20";
        }
        break;
      case "apellidos":
        if (valorInput.length > 0 && valorInput.length <= 20) {
          infoApellidos.textContent = "Apellidos Validos";
          valido = true;
        } else {
          infoApellidos.textContent = "Apellidos Incorrectos, caracteres >20";
        }
        break;
      case "edad":
        if (valorInput >= 0 && valorInput <= 150) {
          infoEdad.textContent = "Edad valida";
          valido = true;
        } else {
          infoEdad.textContent = "Edad incorrecta, 0<edad<150 ";
        }
        break;
      default:
        break;
    }
    if (valido)
      this.cambiarValores()
    else
      e.preventDefault();

  }


  cambiarValores() {
    this.setState(Object.assign({}, this.state, {
      nombre: document.getElementsByName("nombre")[0].value,
      apellidos: document.getElementsByName("apellidos")[0].value,
      edad: document.getElementsByName("edad")[0].value
    }));
    document.getElementsByClassName("info").textContent = "Modificado satisfactoriamente";
  }


  sendInfo = (e) =>{
    $.ajax({
      url: "http://localhost:49305/api/Personas/",
      type: "GET",
      success: function(datos){
        alert(JSON.stringify(datos));
      },
      error:function(xhr,textStatus,errorThrown){
        alert("Error!->"+errorThrown+"-->"+xhr.responseText);
      }
    })
  }

}


ReactDOM.render(
  <Login />,
  document.getElementById('root')
);

