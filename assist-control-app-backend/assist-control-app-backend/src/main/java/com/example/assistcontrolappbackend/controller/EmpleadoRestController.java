package com.example.assistcontrolappbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.assistcontrolappbackend.model.Empleados;
import com.example.assistcontrolappbackend.repository.EmpleadosRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/empleado")
public class EmpleadoRestController {
    
    @Autowired
    private EmpleadosRepository empleadoRepository;

	@GetMapping("/empleados")
	public List<Empleados> getAllempleados(){
		return empleadoRepository.findAll();
	}		

	@PostMapping("/empleados")
	public Empleados createEmpleados(@RequestBody Empleados empleado) {
		return empleadoRepository.save(empleado);
	}

}