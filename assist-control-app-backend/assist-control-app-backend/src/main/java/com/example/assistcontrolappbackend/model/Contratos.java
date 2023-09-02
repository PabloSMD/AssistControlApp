package com.example.assistcontrolappbackend.model;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contratos{
    
    @Id
    private String tipoContrato;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_contrato;
    
    public Contratos(){}

    public Contratos(String tipoContrato, int id_contrato){
        super();
        this.tipoContrato = tipoContrato;
        this.id_contrato = id_contrato;
    }

    public int getId_contrato() {
        return id_contrato;
    }

    public void setId_contrato(int id_contrato) {
        this.id_contrato = id_contrato;
    }

    public String getTipoContrato() {
        return tipoContrato;
    }

    public void setTipoContrato(String tipoCargo) {
        this.tipoContrato = tipoCargo;
    }
}
