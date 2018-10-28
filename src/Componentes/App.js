import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import{obtenerDiferenciaAnio, calcularMarca,obtenerPlan} from '../Helper';
import Resumen from './Resumen';
class App extends Component {
    state ={
        resultado : '',
        datos: {}
    }

    cotizarSeguro =(datos) => {
        const {marca,plan,year} = datos;

       // Agregar una base de 2000
       let resultado = 2000;

       // obtener la diferencia de años
       const diferencia= obtenerDiferenciaAnio(year);


       // por cada año restar el 3% al valor del seguro
        resultado -=((diferencia *3)*resultado)/100;



       // americano 15% Asitatico 5% y europeo 38% de incremento al v.a
       resultado= calcularMarca(marca) * resultado;

        // plan basico incrementa 20% valor y completo 50%
        let incrementoPlan=obtenerPlan(plan);

        // dependiendo del plan
        resultado =parseFloat(incrementoPlan *resultado).toFixed
        (2);
        // crear objeto para resumen
        const datosAuto = {
            marca:marca,
            plan:plan,
            year:year
        }


        this.setState({
            resultado : resultado,
            datos : datosAuto
        })

    }

  render() {
    return (
      <div className="contenedor">
          <Header
            titulo = 'Cotizador de seguro de auto'
          />

          <div className="contenedor-formulario">
              <Formulario
              cotizarSeguro={this.cotizarSeguro}
              />

              <Resumen
                  datos={this.state.datos}
                  resultado={this.state.resultado}

              />

          </div>

      </div>
    );
  }
}

export default App;
