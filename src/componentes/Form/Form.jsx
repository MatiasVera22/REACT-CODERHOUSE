
import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [ userData, setUserData] = useState({
        nombre: "",
        apellido: ""
    })
    const handleChange = (e)=>{
        setUserData({...userData, [e.target.name]: e.target.value })
    }

    const envioDeFormulario = (evento)=>{
            evento.preventDefault()
    }


    console.log(userData)

      return (
    <div>
        <h1>Estamos en el formulario</h1>

        <form onSubmit={envioDeFormulario}>

        <input onChange={handleChange} 
                        value={userData.nombre} 
                        type="text" 
                        name="nombre"
                        placeholder='ingresa tu nombre' />
        <input 
                onChange={handleChange}
                value={userData.apellido}
                type="text" 
                name='apellido'
                placeholder='ingresa tu apellido' />
        
            <button type='submit'>Enviar</button>
        </form>


    </div>
  )
}

export default Form