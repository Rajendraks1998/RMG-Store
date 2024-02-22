package org.rmgstore.repository;

import org.rmgstore.model.Product;
import org.rmgstore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findByName(String productName);
    List<Product> findProductsByUser(User user);
}
