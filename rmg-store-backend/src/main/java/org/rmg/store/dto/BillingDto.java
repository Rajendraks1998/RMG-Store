package org.rmg.store.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.rmg.store.entity.Product;
import org.rmg.store.entity.User;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillingDto {
    private Long id;
    private List<Product> products;
    private LocalDate date;
    private LocalTime time;
    private Double totalPrice;

}
