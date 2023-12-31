import axios from 'axios';

const EMPLEADO_API_BASE_URL = "http://localhost:8080/empleado/empleados";

class EmpleadoService {

    getEmpleados(){
        return axios.get(EMPLEADO_API_BASE_URL);
    }

    createEmpleado(empleado){
        return axios.post(EMPLEADO_API_BASE_URL, empleado);
    }
}

export default new EmpleadoService()