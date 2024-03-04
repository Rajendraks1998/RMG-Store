package org.rmg.store.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.rmg.store.entity.User;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
    private Long id;
    private User user;
    private String name;
    private int quantity;
    private double price;
}
