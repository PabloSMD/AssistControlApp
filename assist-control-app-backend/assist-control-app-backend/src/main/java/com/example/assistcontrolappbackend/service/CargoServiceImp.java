package com.example.assistcontrolappbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.assistcontrolappbackend.model.Cargos;
import com.example.assistcontrolappbackend.repository.CargosRepository;

@Service
public class CargoServiceImp implements CargoService {
    
    @Autowired
    private CargosRepository cargoRepository;

    @Override
    public Cargos createCargos(Cargos cargos) {
		return cargoRepository.save(cargos);

	}
}
