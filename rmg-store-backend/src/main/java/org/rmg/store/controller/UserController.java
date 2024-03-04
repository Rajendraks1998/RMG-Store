package org.rmg.store.controller;

import org.rmg.store.dto.UserDto;
import org.rmg.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    // Build Add User Rest Api
    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto user = userService.createUser(userDto);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    // Build Get User Rest Api
    @GetMapping("{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Long userId){
        UserDto userDto = userService.getUserById(userId);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    // Build get All User Rest Api
    @GetMapping()
    public ResponseEntity<List<UserDto>> getAllUsers(){
        List<UserDto> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    // Build delete User Rest Api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long userId){
        userService.deleteUserById(userId);
        return new ResponseEntity<>("User Deleted Successfully", HttpStatus.OK);
    }
    // Build Update User Rest Api
    @PutMapping("{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") Long userId, @RequestBody UserDto updatedUser){
        UserDto userDto = userService.updateUser(userId, updatedUser);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

}
