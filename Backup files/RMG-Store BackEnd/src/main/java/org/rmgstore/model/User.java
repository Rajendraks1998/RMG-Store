package org.rmgstore.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;
    @Column(name = "user_name")
    private String name;
    @Column(name = "store_name")
    private String store;
    @Column(name = "address")
    private String address;
    @Column(name = "email_id")
    private String emailId;
    @Column(name = "contact")
    private Long contact;
    @Column(name = "password")
    private String password;


}
