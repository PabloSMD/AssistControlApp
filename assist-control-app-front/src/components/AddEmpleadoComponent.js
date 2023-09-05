import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EmpleadoService from '../services/EmpleadoService'


export const AddEmpleadoComponent = () => {

    const [nombres, setNombre] = useState('');
    const [apellidos, setApellido] = useState('');
    const [cargo, setCargo] = useState('');
    const [contrato, setContrato] = useState('');
        const [correo, setCorreo] = useState('');
    const navigate = useNavigate();

    const saveCliente = (e) => {
        e.preventDefault();

        // Comprueba si alguno de los campos está vacío
        if (!nombres || !apellidos || !correo || !cargo || !contrato) {
            alert('Todos los campos deben ser llenados. Revisa los campos nuevamente.');
            return;
        }


        const empleado = {nombres, apellidos, correo, cargo, contrato}
        EmpleadoService.createEmpleado(empleado).then((response) => {
            console.log(response.data);
            navigate('/empleados')
        }).catch(error => {
            console.log(error)
            alert('Ha aparecido un error, intenta nuevamente.');
        })
    }

    return(
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h2 className='text-center'>Agregar nuevo Empleado</h2>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group mb-2">
                                            <label> Nombre: </label>
                                            <input placeholder="Pablo" 
                                            name="Nombres" 
                                            className="form-control" 
                                            value={nombres} 
                                            onChange={(e) => setNombre(e.target.value)}/>
                                        </div>

                                        <div className = "form-group mb-2">
                                            <label> Apellido: </label>
                                            <input placeholder="San Martín" 
                                            name="Apellidos" className="form-control" 
                                            value={apellidos} 
                                            onChange={(e) => setApellido(e.target.value)}/>
                                        </div>

                                        <div className = "form-group mb-2">
                                            <label> Correo: </label>
                                            <input placeholder="ejemplo@mail.cl" 
                                            name="correo" className="form-control" 
                                            value={correo} 
                                            onChange={(e) => setCorreo(e.target.value)}/>
                                        </div>

                                        <div className = "form-group mb-2">
                                            <label> Cargo: </label>
                                            <input placeholder="Cargos existentes por ej: Vendedor, Chofer, etc." 
                                            name="cargo" className="form-control" 
                                            value={cargo.tipoCargo} 
                                            onChange={(e) => setCargo({tipoCargo: e.target.value})}/>
                                        </div>

                                        <div className = "form-group mb-2">
                                            <label> Tipo Contrato: </label>
                                            <input placeholder="ej: jornada completa, jornada parcial" 
                                            name="Contrato" className="form-control" 
                                            value={contrato.tipoContrato} 
                                            onChange={(e) => setContrato({tipoContrato: e.target.value})}/>
                                        </div>

                                        <br></br>

                                        <button className="btn btn-success" onClick={(e) => saveCliente(e)}>Registrar</button>
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