import './index.css';
import Preguntar from './Components/Preguntar';
import React, { useState } from 'react';
function App() {
  // definir state (se hace aca para que se pueda usar en varios componentes)
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);

  

  return (
    <div className='container'>
      <h1>Control de Gastos</h1>
      <div className='contenido-principal'>
        <Preguntar 
        guardarPresupuesto={guardarPresupuesto}
        guardarRestante={guardarRestante}
        />
      </div>
    </div>
  );
};

export default App;
