package com.example.CrudApi;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.CrudApi.Datos;

@Service

public class Dataservice {
    @Autowired
    Datarepository datosRepository;

    public List<Datos> getalldata() {
        List<Datos> datos = new ArrayList<Datos>();
        datosRepository.findAll().forEach(datos1 -> datos.add(datos1));
        return datos;
    }
}
