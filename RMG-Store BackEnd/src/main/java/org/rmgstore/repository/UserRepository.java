package org.rmgstore.repository;

import org.rmgstore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByNameAndPassword(String userName, String password);
    User findByName(String userName);
    User findByEmailId(String emailId);
}
