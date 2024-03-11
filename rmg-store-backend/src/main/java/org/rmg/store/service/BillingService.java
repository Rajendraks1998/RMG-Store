package org.rmg.store.service;

import org.rmg.store.dto.BillingDto;

import java.util.List;

public interface BillingService {

    BillingDto createBilling(BillingDto billingDto);
    BillingDto getBillingById(Long billingId);
    List<BillingDto> getAllBillings();
    void deleteBillingById(Long billingId);
    BillingDto updateBilling(Long billingId, BillingDto billingDto);
}
