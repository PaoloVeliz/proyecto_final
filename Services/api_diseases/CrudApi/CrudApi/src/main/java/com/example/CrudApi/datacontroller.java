package com.example.CrudApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.CrudApi.Dataservice;
import java.util.ArrayList;
import java.util.List;

@RestController

public class datacontroller {
    @Autowired
    Dataservice dataService;
    @GetMapping("/Hola")
    public static String Welcome() {
        return "Welcome to Spring Boot \n" +
                "Remember to subscribe and leave a comment";
    }

    @GetMapping("/Data")
    public List<Datos> AllData() {

        return dataService.getalldata();
    }
}
