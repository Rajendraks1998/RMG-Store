package org.rmgstore.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="product_id")
    private Long id;
    @Column(name="product_name")
    private String name;
    @Column(name="quantity")
    private int quantity;
    @Column(name="price")
    private Double price;

}
