import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EmpleadoService from '../services/EmpleadoService'


export const AddEmpleadoComponent = () => {

    const [nombres, setNombre] = useState('');
    const [apellidos, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [cargo, setCargo] = useState('');
    const [contrato, setContrato] = useState('');
    const navigate = useNavigate();

    const saveCliente = (e) => {
        e.preventDefault();

        // Comprueba si alguno de los campos está vacío
        if (!nombres || !apellidos || !correo || !cargo || !contrato) {
            alert('Todos los campos deben ser llenados. Por favor, completa el formulario.');
            return;
        }


        const empleado = {nombres, apellidos, correo, cargo, contrato}
        EmpleadoService.createEmpleado(empleado).then((response) => {
            console.log(response.data);
            navigate('/empleados')
        }).catch(error => {
            console.log(error)
            alert('La captura de datos tuvo un error. Por favor, intenta nuevamente.');
        })
    }

    return(
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h2 className='text-center'>Registro de empleados</h2>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group mb-2">
                                            <label> Nombres: </label>
                                            <input placeholder="nombres" 
                                            name="Nombres" 
                                            className="form-control" 
                                            value={nombres} 
                                            onChange={(e) => setNombre(e.target.value)}/>
                                        </div>

                                        <div className = "form-group mb-2">
                                            <label> Apellidos: </label>
                                            <input placeholder="apellidos" 
                                            name="Apellidos" className="form-control" 
                                            value={apellidos} 
                                            onChange={(e) => setApellido(e.target.value)}/>
                                        </div>

                                        <div className = "form-group mb-2">
                                            <label> Correo: </label>
                                            <input placeholder="direccion de Correo" 
                                            name="correo" className="form-control" 
                                            value={correo} 
                                            onChange={(e) => setCorreo(e.target.value)}/>
                                        </div>

                                        <div className = "form-group mb-2">
                                            <label> Cargo: </label>
                                            <input placeholder="cargo" 
                                            name="cargo" className="form-control" 
                                            value={cargo.tipoCargo} 
                                            onChange={(e) => setCargo({tipoCargo: e.target.value})}/>
                                        </div>

                                        <div className = "form-group mb-2">
                                            <label> Tipo Contrato: </label>
                                            <input placeholder="tipo Contrato" 
                                            name="Contrato" className="form-control" 
                                            value={contrato.tipoContrato} 
                                            onChange={(e) => setContrato({tipoContrato: e.target.value})}/>
                                        </div>

                                        <button className="btn btn-success" onClick={(e) => saveCliente(e)}>Guardar</button>
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to='/empleados' className='btn btn-danger'>Cancelar</Link>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
    )
}

export default AddEmpleadoComponent;