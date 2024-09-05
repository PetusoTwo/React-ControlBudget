import React, { Fragment, useState } from 'react'
import Error from './Error';
export default function Preguntar({ guardarPresupuesto, guardarRestante }) {

    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    //Funcion que lee el presupuesto

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        //Si pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }
  return (
    <Fragment>
      <h2>Ingrese su presupuesto:</h2>
        { error ? <Error mensaje='El presupuesto no es valido'/> : null }
      <form
      onSubmit = { agregarPresupuesto }
      >
        <input type="number" className='u-full-width' placeholder='Presupuesto' onChange={definirPresupuesto}/>
        <input type="submit" className='button-primary u-full-width' value='Definir Presupuesto' />
      </form>
    </Fragment>
  )
}
