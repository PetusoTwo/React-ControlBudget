import React, { Fragment, useState } from 'react'
export default function Preguntar() {

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
        guardarError(false);
        //cierra el modal

        //Si el presupuesto se ha definido y ppasa la validacion
    }
  return (
    <Fragment>
      <h2>Ingrese su presupuesto:</h2>
    { error ? <p className='alerta-error'>No es un presupuesto valido</p> : null }
      <form
      onSubmit = { agregarPresupuesto }
      >
        <input type="number" className='u-full-width' placeholder='Presupuesto' onChange={definirPresupuesto}/>
        <input type="submit" className='button-primary u-full-width' value='Definir Presupuesto' />
      </form>
    </Fragment>
  )
}
