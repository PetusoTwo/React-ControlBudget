import React from 'react'

function Error({mensaje}) {
    return (
        <p className='alert alert-danger error'>
        {mensaje}
        </p>
    )
}

export default Error