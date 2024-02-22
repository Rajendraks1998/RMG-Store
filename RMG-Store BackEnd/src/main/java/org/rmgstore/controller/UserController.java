package org.rmgstore.controller;

import org.rmgstore.dto.UserDto;
import org.rmgstore.enums.ConstantsEnum;
import org.rmgstore.model.User;
import org.rmgstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserDto userDto){
        User user1 = userService.login(userDto);
        if(user1!=null)
            return new ResponseEntity<>("User Logged in Successfully",HttpStatus.OK);
        else
            return new ResponseEntity<>("Please check the credentials",HttpStatus.NOT_FOUND);
    }
    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody User user){
        String existingUser = userService.validateUser(user);
        if(existingUser == null){
            userService.add(user);
            return new ResponseEntity<>(ConstantsEnum.CREATED_SUCCESSFULLY.getValue(), HttpStatus.OK);
        }
        return new ResponseEntity<>(existingUser, HttpStatus.NOT_FOUND);
    }
    @PutMapping("/update")
    public ResponseEntity<String> update(@RequestBody User user){
        String result = userService.update(user);
        if(result.equals(ConstantsEnum.UPDATED_SUCCESSFULLY.getValue()))
            return new ResponseEntity<>(result,HttpStatus.OK);
        else
            return new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
    }
    @GetMapping("/findAll")
    public List<User> findAll(){
        return userService.findAll();
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long userId){

        String result=userService.delete(userId);
        return new ResponseEntity<>(result,HttpStatus.OK);

    }

}
