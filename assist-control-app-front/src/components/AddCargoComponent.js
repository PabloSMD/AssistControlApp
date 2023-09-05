import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CargoService from '../services/CargoService.js';


export const AddCargoComponent = () => {

    const [tipoCargo, setCargo] = useState('');
    const navigate = useNavigate();

    const saveCargo = (e) => {
        e.preventDefault();

        if (tipoCargo.trim() === '') {
            alert('El campo Tipo de cargo no puede estar vacío. Añade información al campo.');
            return;
        }

        const cargo = { tipoCargo };
        CargoService.createCargo(cargo).then((response) => {
            console.log(response.data);
            navigate('/empleados');
        }).catch(error => {
            console.log(error);
            alert('La captura de datos tuvo un error. Por favor, intenta nuevamente.');
        });
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className='text-center main-title'>Agregar nuevo Cargo</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label> Tipo de cargo: </label>
                                    <input placeholder="ej: vendedor"
                                        name="tipoCargo"
                                        className="form-control"
                                        value={tipoCargo}
                                        onChange={(e) => setCargo(e.target.value)} />
                                </div>
                                <br></br>
                                <button className="btn btn-success" onClick={(e) => saveCargo(e)}>Guardar</button>
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

export default AddCargoComponent;