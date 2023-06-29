package com.example.CrudApi;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "tbl_DatosDengue")
public class Datos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDatos;
    private String fecha;
    private String num_pacientes;
}
