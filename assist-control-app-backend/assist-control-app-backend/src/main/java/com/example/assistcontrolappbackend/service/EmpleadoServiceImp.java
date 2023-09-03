package com.example.assistcontrolappbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.assistcontrolappbackend.model.Empleados;
import com.example.assistcontrolappbackend.repository.EmpleadosRepository;

@Service
public class EmpleadoServiceImp implements EmpleadoService {
     @Autowired
    private EmpleadosRepository empleadosRepository;

    @Override
    public Empleados createEmpleados(Empleados empleados) {
		return empleadosRepository.save(empleados);

	}
}
