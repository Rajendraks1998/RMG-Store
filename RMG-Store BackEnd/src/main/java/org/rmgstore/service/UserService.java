package org.rmgstore.service;

import org.rmgstore.dto.UserDto;
import org.rmgstore.exceptions.UserNotFoundException;
import org.rmgstore.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User login(UserDto userDto);
    User add (User user);
    String update (User user);
    String delete(Long userId);
    List<User> findAll();
    String validateUser(User user);

    Optional<User> findById(Long userId) ;
}
