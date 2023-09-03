package com.example.assistcontrolappbackend.service;

import java.util.List;

import com.example.assistcontrolappbackend.model.Empleados;

public interface EmpleadoService {
    public List<Empleados> getAllempleados();

    public Empleados createEmpleados(Empleados empleados);

}