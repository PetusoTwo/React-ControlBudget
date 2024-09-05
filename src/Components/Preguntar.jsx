import React, { Fragment, useState } from 'react'

//Definir el state para cantidad

//Definir el state para gastos

export default function Preguntar() {
  return (
    <Fragment>
      <h2>Ingrese su presupuesto:</h2>

      <form action="">
        <input type="number" className='u-full-width' placeholder='Presupuesto' />
        <input type="submit" className='button-primary u-full-width' value='Definir Presupuesto' />
      </form>
    </Fragment>
  )
}
