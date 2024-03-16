package org.rmg.store.controller;

import org.rmg.store.dto.BillingDto;
import org.rmg.store.service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/billings")
public class BillingController {
    @Autowired
    private BillingService billingService;


    @PostMapping
    public ResponseEntity<BillingDto> createBilling(@RequestBody BillingDto billingDto){

        BillingDto billing1 = billingService.createBilling(billingDto);
        if(billing1==null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(billing1, HttpStatus.CREATED);
    }


    @GetMapping("{id}")
    public ResponseEntity<BillingDto> getBillingById(@PathVariable("id") Long billingId){
        BillingDto billingDto = billingService.getBillingById(billingId);
        return new ResponseEntity<>(billingDto, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<BillingDto>> getAllBillings(){
        List<BillingDto> billings = billingService.getAllBillings();
        return new ResponseEntity<>(billings, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBilling(@PathVariable("id") Long billingId){
        billingService.deleteBillingById(billingId);
        return new ResponseEntity<>("Billing Deleted Successfully", HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<BillingDto> updateBilling(@PathVariable("id") Long billingId, @RequestBody BillingDto updatedBilling){
        BillingDto billingDto = billingService.updateBilling(billingId, updatedBilling);
        return new ResponseEntity<>(billingDto, HttpStatus.OK);
    }

}
