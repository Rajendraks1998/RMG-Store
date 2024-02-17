package org.rmgstore.service;

import org.rmgstore.model.User;

import java.util.List;

public interface UserService {
    User login(User user);
    User save (User user);
    List<User> findAll();
}
