package com.example.assistcontrolappbackend.repository;

import com.example.assistcontrolappbackend.model.Contratos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContratosRepository extends JpaRepository<Contratos, Integer>{

}
