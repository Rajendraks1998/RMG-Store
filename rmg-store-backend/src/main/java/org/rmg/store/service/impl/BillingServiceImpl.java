package org.rmg.store.service.impl;

import org.modelmapper.ModelMapper;
import org.rmg.store.constants.ConstantsEnum;
import org.rmg.store.dto.BillingDto;
import org.rmg.store.entity.Billing;
import org.rmg.store.entity.Product;
import org.rmg.store.exception.ResourceNotFoundException;
import org.rmg.store.repository.BillingRepository;
import org.rmg.store.service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BillingServiceImpl implements BillingService {
    @Autowired
    private BillingRepository billingRepository;

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public BillingDto createBilling(BillingDto billingDto) {
        Billing billing = new Billing();
        List<Long> productIds = new ArrayList<>();
        List<Product> products = new ArrayList<>();
        for(Product product: billingDto.getProducts()){
            if(product.getQuantity()!=0){
                products.add(product);
                productIds.add(product.getId());
            }
        }
        if(products.isEmpty()){
            return null;
        }
        billing.setProductIds(productIds);
        billing.setTotalPrice(getTotalPrice(products));
        billing.setDate(LocalDate.now());
        billing.setTime(LocalTime.now());
        Billing savedBilling = billingRepository.save(billing);

        BillingDto billingDto1 = new BillingDto();
        billingDto1.setDate(savedBilling.getDate());
        billingDto1.setTime(savedBilling.getTime());
        billingDto1.setTotalPrice(savedBilling.getTotalPrice());
        billingDto1.setProducts(products);
        billingDto1.setId(savedBilling.getId());
        return billingDto1;
    }

    @Override
    public BillingDto getBillingById(Long billingId) {
        Billing billing = billingRepository.findById(billingId).orElseThrow(
                ()-> new ResourceNotFoundException(ConstantsEnum.PRODUCT_NOT_EXISTS.getValue()+billingId)
        );
        return modelMapper.map(billing,BillingDto.class);
    }

    @Override
    public List<BillingDto> getAllBillings() {
        List<Billing> billings = billingRepository.findAll();
        return billings.stream().map((billing) -> modelMapper.map(billing,BillingDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteBillingById(Long billingId) {
        Billing billing = billingRepository.findById(billingId).orElseThrow(
                () -> new ResourceNotFoundException(ConstantsEnum.PRODUCT_NOT_EXISTS.getValue() + billingId)
        );
        billingRepository.deleteById(billingId);
    }

    @Override
    public BillingDto updateBilling(Long billingId, BillingDto updatedBilling) {
        Billing billing = billingRepository.findById(billingId).orElseThrow(
                () -> new ResourceNotFoundException(ConstantsEnum.PRODUCT_NOT_EXISTS.getValue()+ billingId)
        );
//        billing.setProducts(updatedBilling.getProducts());
        billing.setDate(LocalDate.now());
        billing.setTime(LocalTime.now());
        billing.setTotalPrice(getTotalPrice(updatedBilling.getProducts()));
        billingRepository.save(billing);
        return  modelMapper.map(billing,BillingDto.class);
    }
    public double getTotalPrice(List<Product> products) {
        double sum = 0;
        for(Product product: products){
            sum += product.getQuantity() * product.getPrice();
        }
        return sum;
    }
}
