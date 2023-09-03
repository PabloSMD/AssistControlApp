package com.example.assistcontrolappbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.assistcontrolappbackend.model.Contratos;
import com.example.assistcontrolappbackend.repository.ContratosRepository;

@Service
public class ContratoServiceImp implements ContratoService {
     @Autowired
    private ContratosRepository contratosRepository;

    @Override
    public Contratos createContratos(Contratos contratos) {
		return contratosRepository.save(contratos);

	}
}



