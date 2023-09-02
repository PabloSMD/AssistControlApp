package com.example.assistcontrolappbackend.repository;

import com.example.assistcontrolappbackend.model.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CargosRepository extends JpaRepository<Cargos, Integer>{

    

}

