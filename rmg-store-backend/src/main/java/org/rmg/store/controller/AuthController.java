package org.rmg.store.controller;

import org.rmg.store.dto.LoginCredentials;
import org.rmg.store.dto.UserDto;
import org.rmg.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;
    @RequestMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody LoginCredentials loginCredentials){
        UserDto userDto = userService.findByNameAndPassword(loginCredentials.getName(), loginCredentials.getPassword());
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
}
