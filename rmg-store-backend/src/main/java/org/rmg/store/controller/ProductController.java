package org.rmg.store.controller;

import org.rmg.store.dto.ProductDto;
import org.rmg.store.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/products")
public class ProductController {
    @Autowired
    private ProductService productService;


    @PostMapping
    public ResponseEntity<ProductDto> createProduct(@RequestBody ProductDto productDto){
        ProductDto product1 = productService.createProduct(productDto);
        return new ResponseEntity<>(product1, HttpStatus.CREATED);
    }


    @GetMapping("{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable("id") Long productId){
        ProductDto productDto = productService.getProductById(productId);
        return new ResponseEntity<>(productDto, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<ProductDto>> getAllProducts(){
        List<ProductDto> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId){
        productService.deleteProductById(productId);
        return new ResponseEntity<>("Product Deleted Successfully", HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable("id") Long productId, @RequestBody ProductDto updatedProduct){
        ProductDto productDto = productService.updateProduct(productId, updatedProduct);
        return new ResponseEntity<>(productDto, HttpStatus.OK);
    }

}
