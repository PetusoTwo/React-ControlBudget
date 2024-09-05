import './index.css';
import Preguntar from './Components/Preguntar';
function App() {
  return (
    <div className='container'>
      <h1>Control de Gastos</h1>
      <div className='contenido-principal'>
        <Preguntar />
      </div>
    </div>
  );
};

export default App;
