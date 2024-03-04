package org.rmgstore.enums;

public enum ConstantsEnum {
    USERNAME_ALREADY_EXISTS("Username Already exist"),
    EMAIL_ALREADY_EXISTS("Email Already exist"),
    CREATED_SUCCESSFULLY("Created Successfully"),
    UPDATED_SUCCESSFULLY("Updated Successfully"),
    USERID_DOES_NOT_EXISTS("User Id does not exists"),
    DELETED_SUCCESSFULLY("Deleted Successfully"),
    PRODUCT_ALREADY_EXISTS("Product already exists");
    private String value;

    private ConstantsEnum(String value) {
        this.value = value;
    }
    public String getValue() {
        return this.value;
    }
}
