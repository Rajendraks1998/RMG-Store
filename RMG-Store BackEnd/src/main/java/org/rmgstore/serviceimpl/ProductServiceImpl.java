package org.rmgstore.serviceimpl;

import org.rmgstore.model.Product;
import org.rmgstore.repository.ProductRepository;
import org.rmgstore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public String delete(Long productId) {
        productRepository.deleteById(productId);
        return "Product deleted Successfully";
    }
}
