package org.rmgstore.service;

import org.rmgstore.model.Product;
import org.rmgstore.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProductService {

    Product save (Product product);
    List<Product> findAll();
    String delete(Long productId);
}
