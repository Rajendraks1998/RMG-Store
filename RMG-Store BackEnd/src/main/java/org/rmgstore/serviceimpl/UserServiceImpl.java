package org.rmgstore.serviceimpl;

import org.rmgstore.model.User;
import org.rmgstore.repository.UserRepository;
import org.rmgstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public User login(User user) {
        return userRepository.findByNameAndPassword(user.getName(),user.getPassword());
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
}
