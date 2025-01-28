package com.example.Typing.Speed.Test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TypingTestController {

    @GetMapping("/")
    public String index() {
        return "index";
    }
}
