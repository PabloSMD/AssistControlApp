package com.example.assistcontrolappbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.assistcontrolappbackend.model.Cargos;
import com.example.assistcontrolappbackend.repository.CargosRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cargo")
public class CargoRestController {

   @Autowired
    private CargosRepository cargoRepository;

	@PostMapping("/cargos")
	    public ResponseEntity<Cargos> createCargos(@RequestBody Cargos cargos) {
        try {
            Cargos createdCargo = cargoRepository.save(cargos);
            return new ResponseEntity<>(createdCargo, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
