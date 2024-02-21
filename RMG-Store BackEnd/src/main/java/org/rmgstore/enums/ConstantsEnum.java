package org.rmgstore.enums;

public enum ConstantsEnum {
    USERNAME_ALREADY_EXISTS("Username Already exist"),
    EMAIL_ALREADY_EXISTS("Email Already exist"),
    USER_CREATED_SUCCESSFULLY("User Created Successfully"),
    USER_UPDATED_SUCCESSFULLY("User Updated Successfully"),
    USERID_DOES_NOT_EXISTS("User Id does not exists");
    private String value;

    private ConstantsEnum(String value) {
        this.value = value;
    }
    public String getValue() {
        return this.value;
    }
}
