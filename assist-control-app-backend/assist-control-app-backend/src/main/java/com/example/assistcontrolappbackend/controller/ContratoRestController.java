package com.example.assistcontrolappbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.assistcontrolappbackend.model.Contratos;
import com.example.assistcontrolappbackend.repository.ContratosRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value= "/contrato")
public class ContratoRestController {
    
    @Autowired
    private ContratosRepository contratoRepository;

	@PostMapping("/contratos")
	    public ResponseEntity<Contratos> createContratos(@RequestBody Contratos contratos) {
        try {
            Contratos createContrato = contratoRepository.save(contratos);
            return new ResponseEntity<>(createContrato, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    

}
