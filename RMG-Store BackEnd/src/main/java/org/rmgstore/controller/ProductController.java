package org.rmgstore.controller;

import org.rmgstore.model.Product;
import org.rmgstore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class ProductController {

    @Autowired
    private ProductService productService;


    @GetMapping("/save")
    public String save(@RequestBody Product product){
        Product productDetails = productService.save(product);
        if(productDetails!=null)
            return "Product added Successfully";
        return "Product Not added";
    }


    @GetMapping("/findall")
    public List<Product> findAll(){

        return productService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long productId){
        return new ResponseEntity<>(productService.delete(productId), HttpStatus.OK);
    }
}

