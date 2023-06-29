package com.example.CrudApi;

import org.springframework.data.repository.CrudRepository;
import com.example.CrudApi.Datos;

public interface Datarepository extends CrudRepository<Datos, Integer>{
    
}
