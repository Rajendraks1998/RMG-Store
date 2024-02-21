package org.rmgstore.service;

import org.rmgstore.dto.UserDto;
import org.rmgstore.model.User;

import java.util.List;

public interface UserService {
    User login(UserDto userDto);
    User add (User user);
    String update (User user);
    String delete(Long userId);
    List<User> findAll();
    String validateUser(User user);
}
