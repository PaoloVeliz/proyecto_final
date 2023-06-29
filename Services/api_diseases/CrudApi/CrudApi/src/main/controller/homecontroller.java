package com.example.CrudApi;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class homecontroller {
    @RequestMapping(value="/")
    public static String Welcome() {
        return "Welcome to Spring Boot \n" +
        "Remember to subscribe and leave a comment";
    }
}
