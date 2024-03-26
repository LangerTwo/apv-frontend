import { useState } from "react"
import Formularios from "../components/Formularios"
import ListadoPacientes from "../components/ListadoPacientes"

const AdministrarPacientes = () => {
  const [mostarFormulario, setMostrarFormulario] = useState(false)

  return (
    <div className="flex flex-col md:flex-row">
      <button type="button" className='bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden'
      onClick={() => setMostrarFormulario(!mostarFormulario)}>
        {mostarFormulario ? 'Ocultar Formulario': 'Mostrar Formulario' }
      </button>
      <div className={`${mostarFormulario ? 'block' : 'hidden' } md:block md:w-1/2 lg:w-2/5`}>
          <Formularios />
      </div>
      <div className="md:w-1/2 lg:w-3/5">
          <ListadoPacientes />
      </div>
    </div>
  )
}

export default AdministrarPacientes
