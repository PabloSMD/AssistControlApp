package com.example.assistcontrolappbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.assistcontrolappbackend.model.Empleados;
import com.example.assistcontrolappbackend.repository.EmpleadosRepository;

import java.util.List;

@Service
public class EmpleadoServiceImp implements EmpleadoService {
  @Autowired
  private EmpleadosRepository empleadosRepository;

  @Override
  public List<Empleados> getAllempleados() {
    return empleadosRepository.findAll();
  }

  @Override
  public Empleados createEmpleados(Empleados empleados) {
    return empleadosRepository.save(empleados);
  }

}
