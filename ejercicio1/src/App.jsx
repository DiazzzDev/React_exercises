import './App.css'
import Boton from './components/Boton.jsx'
import Input from './components/Inputs.jsx'
import Select from './components/Select.jsx'
import Checkbox from './components/Checkbox.jsx'
import Card from './components/Card.jsx'
import ProgressBar from './components/ProgressBar.jsx'

function App() {

  return (
    <>
      <div className="botones">
        <Boton titulo={"Guardar"} color={"btn btn-primary"}/>
        <Boton titulo={"Eliminar"} color={"btn btn-danger"}/>
        <Boton titulo={"Cancelar"} color={"btn btn-ghost"}/>  
      </div>
      <div className="inputs">
        <Input typeProp={"text"} placeholderProp={"Coloca tu nombre"}/>
        <Input typeProp={"email"} placeholderProp={"Coloca tu email"}/>
        <Input typeProp={"file"} placeholderProp={"Adjuntar archivo"}/>
      </div>
      <div className="selects">
        <Select title={"Color"} value1={"Rojo"} value2={"Azúl"} value3={"Verde"}/>
        <Select title={"Marca"} value1={"Android"} value2={"Apple"} value3={"Linux"}/>
        <Select title={"Dispositivo"} value1={"Computadora"} value2={"Teléfono"} value3={"Otro"}/>
      </div>
      {/* Clases de bootstrap para agrupar checkbox's */}
      <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <Checkbox id={"check1"}/>
        <Checkbox id={"check2"}/>
        <Checkbox id={"check3"}/>
      </div>
      <div className="cards">
        <Card title={"Producto 1"} content={"Lorem ipsum"}/>
        <Card title={"Producto 2"} content={"Lorem ipsum"}/>
        <Card title={"Producto 3"} content={"Lorem ipsum"}/>
      </div>
      <div className="Progress-bar">
        <ProgressBar/>
      </div>
    </>
  )
}

export default App
