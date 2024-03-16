package org.rmg.store.service;

import org.rmg.store.dto.ProductDto;

import java.util.List;

public interface ProductService {

    ProductDto createProduct(ProductDto productDto);
    ProductDto getProductById(Long productId);
    List<ProductDto> getAllProducts(Long userId);
    void deleteProductById(Long productId);
    ProductDto updateProduct(Long productId, ProductDto productDto);
}
