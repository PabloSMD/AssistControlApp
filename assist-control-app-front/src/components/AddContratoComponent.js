import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ContratoService from '../services/ContratoService.js';

export const AddContratoComponent = () => {
  const [tipoContrato, setContrato] = useState('');
  const navigate = useNavigate();

  const saveContrato = (e) => {
    e.preventDefault();
    if (tipoContrato.trim() === '') {
      alert('El campo de tipo de contrato no puede estar vacío. Por favor, completa el formulario.');
      return;
    }

    const contrato = { tipoContrato };
    ContratoService.createContrato(contrato)
      .then((response) => {
        console.log(response.data);
        navigate('/empleados');
      })
      .catch((error) => {
        console.log(error);
        alert('La captura de datos tuvo un error. Por favor, intenta nuevamente.');
      });
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center main-title">Agregar nuevo Contrato</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label> Tipo de contrato: </label>
                  <input
                    placeholder="ej: jornada completa "
                    name="tipoContrato"
                    className="form-control"
                    value={tipoContrato}
                    onChange={(e) => setContrato(e.target.value)}
                  />
                </div>
                <br></br>

                <button className="btn btn-success" onClick={(e) => saveContrato(e)}>
                  Guardar
                </button>
                &nbsp;&nbsp;&nbsp;
                <Link to="/empleados" className="btn btn-danger">
                  Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContratoComponent;