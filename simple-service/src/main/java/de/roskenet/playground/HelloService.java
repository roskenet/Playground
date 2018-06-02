package de.roskenet.playground;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloService {

    @GetMapping("/")
    public String hello() {
        return "{ \"answer\": \"Hello World\"}";
    }
}
