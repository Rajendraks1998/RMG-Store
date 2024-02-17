package org.rmgstore.controller;

import org.rmgstore.model.User;
import org.rmgstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user){
        User user1 = userService.login(user);
        if(user1!=null)
            return new ResponseEntity<>("User Logged in Successfully",HttpStatus.OK);
        else
            return new ResponseEntity<>("Please check the credentials",HttpStatus.NOT_FOUND);
    }
    @GetMapping("/save")
    public String save(@RequestBody User user){
        User user1 = userService.save(user);
        if(user1!=null)
            return "User created Successfully";
        return "User not created";
    }

    @GetMapping("/findall")
    public List<User> findAll(){
        return userService.findAll();
    }
}
