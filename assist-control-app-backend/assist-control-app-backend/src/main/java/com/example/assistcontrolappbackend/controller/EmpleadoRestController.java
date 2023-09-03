package com.example.assistcontrolappbackend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<List<Empleados>> getAllEmpleados() {
		try {
			List<Empleados> empleadosList = empleadoRepository.findAll();
			if (!empleadosList.isEmpty()) {
				return new ResponseEntity<>(empleadosList, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/empleados")
	public ResponseEntity<Empleados> createEmpleados(@RequestBody Empleados empleados) {
        try {
            Empleados createdEmpleados = empleadoRepository.save(empleados);
            return new ResponseEntity<>(createdEmpleados, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}