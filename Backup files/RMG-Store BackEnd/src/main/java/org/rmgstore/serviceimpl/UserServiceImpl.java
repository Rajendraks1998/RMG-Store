package org.rmgstore.serviceimpl;

import org.rmgstore.dto.UserDto;
import org.rmgstore.exceptions.UserNotFoundException;
import org.rmgstore.model.User;
import org.rmgstore.repository.UserRepository;
import org.rmgstore.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.rmgstore.enums.ConstantsEnum;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
    @Autowired
    private UserRepository userRepository;
    @Override
    public User login(UserDto userDto) {
        String user = userDto.getUser();
        String password = userDto.getPassword();
        User existingUser = null;
        try {
            existingUser = userRepository.findByName(user);
            if (existingUser != null && existingUser.getPassword().equals(password)) {
                return existingUser;
            }
            existingUser = userRepository.findByEmailId(user);
            if (existingUser != null && existingUser.getPassword().equals(password)) {
                return existingUser;
            }
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        }
        return null;
    }

    @Override
    public User add(User user) {
        return userRepository.save(user);
    }

    @Override
    public String update(User user) {
        User user2 = null;
        String existingUser = null;
        try {
            Optional<User> user1 = userRepository.findById(user.getId());
            if(user1.isPresent()){
                user2=user1.get();
                user2.setName(user.getName());
                user2.setStore(user.getStore());
                user2.setAddress(user.getAddress());
                user2.setEmailId(user.getEmailId());
                user2.setContact(user.getContact());
                existingUser=validateUser(user2);
                if(existingUser==null){
                    userRepository.save(user2);
                    return ConstantsEnum.UPDATED_SUCCESSFULLY.getValue();
                }
                else {
                    return existingUser;
                }
            }
            else {
                throw new UserNotFoundException(ConstantsEnum.USERID_DOES_NOT_EXISTS.getValue());
            }
        }catch (Exception e){
            LOGGER.error(e.getMessage(), e);
        }
        return ConstantsEnum.USERID_DOES_NOT_EXISTS.getValue();
    }

    @Override
    public String delete(Long userId){
        Optional<User> user = userRepository.findById(userId);
        try {
            if(user.isPresent()) {
                userRepository.deleteById(userId);

            } else {
                throw new UserNotFoundException("UserId doesn't exists");
            }
        }catch(UserNotFoundException e){
            LOGGER.error("Exception occurred while deleting the user: {}",e.getMessage());
        }
        return ConstantsEnum.DELETED_SUCCESSFULLY.getValue();


    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
    @Override
    public String validateUser(User user) {
        User existingUser = null;
        try {
            if(user.getId()!=null){
                existingUser = userRepository.findByName(user.getName());
                if (existingUser != null && !Objects.equals(existingUser.getId(), user.getId())) {
                    return ConstantsEnum.USERNAME_ALREADY_EXISTS.getValue();
                }
                existingUser = userRepository.findByEmailId(user.getEmailId());
                if (existingUser != null && !Objects.equals(existingUser.getId(), user.getId())) {
                    return ConstantsEnum.EMAIL_ALREADY_EXISTS.getValue();
                }
            }
            else {
                existingUser = userRepository.findByName(user.getName());
                if (existingUser != null) {
                    return ConstantsEnum.USERNAME_ALREADY_EXISTS.getValue();
                }
                existingUser = userRepository.findByEmailId(user.getEmailId());
                if (existingUser != null) {
                    return ConstantsEnum.EMAIL_ALREADY_EXISTS.getValue();
                }
            }
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        }
        return null;
    }

    @Override
    public Optional<User> findById(Long userId) {
        Optional<User> user=userRepository.findById(userId);
        return user;
    }

}
