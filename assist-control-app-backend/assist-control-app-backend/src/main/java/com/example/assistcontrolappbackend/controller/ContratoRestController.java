package com.example.assistcontrolappbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
	public Contratos creatContratos(@RequestBody Contratos contrato) {
		return contratoRepository.save(contrato);
	}
    

}
