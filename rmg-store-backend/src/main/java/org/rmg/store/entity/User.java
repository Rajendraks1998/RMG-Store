package org.rmg.store.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(name = "user_name")
    private String name;
    @Column(name = "store_name", unique = true, nullable = false)
    private String store;
    @Column(name = "address")
    private String address;
    @Column(name = "contact")
    private Long contact;
    @Column(name = "email_id", nullable = false, unique = true)
    private String email;
    @Column(name = "password")
    private String password;

}
