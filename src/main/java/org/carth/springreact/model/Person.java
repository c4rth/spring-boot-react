package org.carth.springreact.model;

import lombok.Data;

@Data
public class Person {
    private int id;
    private String firstName;
    private String lastName;
    private int age;
    private int visits;
    private int progress;
    private String status;
    private String address;
    private String email;
    private boolean isAdmin;
}
