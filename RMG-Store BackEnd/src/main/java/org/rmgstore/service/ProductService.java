package org.rmgstore.service;

import org.rmgstore.model.Product;

import java.util.List;

public interface ProductService {

    Product save (Product product);
    String update(Product product);
    List<Product> findAll();
    String delete(Long productId);
    List<Product> findProductByUser(Long userId);

//    String validateProduct(Product product);

}
