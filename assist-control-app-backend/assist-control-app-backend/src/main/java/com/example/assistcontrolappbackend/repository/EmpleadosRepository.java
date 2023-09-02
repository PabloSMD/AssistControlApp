package com.example.assistcontrolappbackend.repository;

import com.example.assistcontrolappbackend.model.Empleados;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadosRepository extends JpaRepository<Empleados, Integer>{

}