package org.rmgstore.controller;

import org.rmgstore.enums.ConstantsEnum;
import org.rmgstore.model.Product;
import org.rmgstore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductService productService;


    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody Product product) {
//        String existingProduct = productService.validateProduct(product);
//        if(existingProduct == null){
        try {
            productService.save(product);
            return new ResponseEntity<>(ConstantsEnum.CREATED_SUCCESSFULLY.getValue(), HttpStatus.OK);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(ConstantsEnum.PRODUCT_ALREADY_EXISTS.getValue(), HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

    @PutMapping("/update")
    public ResponseEntity<String> update(@RequestBody Product product){
        String result = productService.update(product);
        if(result.equals(ConstantsEnum.UPDATED_SUCCESSFULLY.getValue()))
            return new ResponseEntity<>(result,HttpStatus.OK);
        else
            return new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
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

