import React, { useEffect, useState } from 'react';
import EmpleadoService from '../services/EmpleadoService';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


export const ListEmpleadoComponent = () => {
    const [empleados, setEmpleados] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchCargo, setSearchCargo] = useState('');
    const [searchContrato, setSearchContrato] = useState('');

    useEffect(() => {
        EmpleadoService.getEmpleados().then((response) => {
            setEmpleados(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const filteredEmpleados = empleados.filter((empleado) => {
        return (
            empleado.nombres.toLowerCase().includes(searchName.toLowerCase()) &&
            empleado.cargo.tipoCargo.toLowerCase().includes(searchCargo.toLowerCase()) &&
            empleado.contrato.tipoContrato.toLowerCase().includes(searchContrato.toLowerCase())
        );
    });
    

    return (
        <div className="container ">
            <h2 className="text-center main-title">Assist Control App</h2>
            <br></br>



            <div className="row ">

            <div className="col-md-6">
            <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Seleccione una categoría para Agregar
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/add-Empleado">Agregar nuevo Empleado</a>
    <a class="dropdown-item" href="/add-Contrato">Agregar nuevo Contrato</a>
    <a class="dropdown-item" href="/add-Cargo">Agregar nuevo Cargo</a>
  </div>
</div>
</div>

<div className="col-md-6 row-boton">
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Seleccione una el tipo de Filtro
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <input
                        type="text"
                        placeholder="Buscar por Nombre"
                        onChange={(e) => setSearchName(e.target.value)}
                        className="form-control mb-3 filtro"
                    />
     <input
                        type="text"
                        placeholder="Buscar por Cargo"
                        onChange={(e) => setSearchCargo(e.target.value)}
                        className="form-control mb-3 filtro"
                    />
   <input
                        type="text"
                        placeholder="Buscar por Contrato"
                        onChange={(e) => setSearchContrato(e.target.value)}
                        className="form-control mb-3 filtro"
                    />
  </div>
</div>
</div>
</div>
           <br></br> <br></br>
            <div className="row justify-content-center">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Cargo</th>
                            <th>Contrato</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmpleados.map((empleado) => (
                            <tr key={empleado.id}>
                                <td>{empleado.nombres}</td>
                                <td>{empleado.apellidos}</td>
                                <td>{empleado.cargo.tipoCargo}</td>
                                <td>{empleado.contrato.tipoContrato}</td>
                                <td>{empleado.correo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmpleadoComponent;