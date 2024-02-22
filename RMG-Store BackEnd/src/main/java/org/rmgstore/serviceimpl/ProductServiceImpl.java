package org.rmgstore.serviceimpl;

import org.rmgstore.enums.ConstantsEnum;
import org.rmgstore.model.Product;
import org.rmgstore.repository.ProductRepository;
import org.rmgstore.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class ProductServiceImpl implements ProductService {

    private static final Logger LOGGER= LoggerFactory.getLogger(ProductService.class);
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product save(Product product)  {
        return productRepository.save(product);
    }

    @Override
    public String update(Product product) {
        Product product2=null;
        try{
        Optional<Product> product1 = productRepository.findById(product.getId());

        if(product1.isPresent()){
            product2=product1.get();
            product2.setName(product.getName());
            product2.setQuantity(product.getQuantity());
            product2.setPrice(product.getPrice());
            productRepository.save(product2);
            return ConstantsEnum.UPDATED_SUCCESSFULLY.getValue();
        }
    }catch (Exception e){
        LOGGER.error(e.getMessage());
    }
        return ConstantsEnum.PRODUCT_ALREADY_EXISTS.getValue();
}

@Override
public List<Product> findAll() {
    return productRepository.findAll();
}

@Override
public String delete(Long productId) {
    productRepository.deleteById(productId);
    return ConstantsEnum.DELETED_SUCCESSFULLY.getValue();
}

//    @Override
//    public String validateProduct(Product product) {
//        Product product1=productRepository.findByName(product.getName());
//
//        if(product1!=null){
//            return ConstantsEnum.PRODUCT_ALREADY_EXISTS.getValue();
//        }
//        return null;
//    }


}
