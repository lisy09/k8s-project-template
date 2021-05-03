package com.lisy09.k8s_project_template.examples.commodity_recsys.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = UserEntity.TABLE_NAME)
public class UserEntity {
    public static final String TABLE_NAME = "user";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public int id;

    @Column(name = "name")
    public String name;

    @Column(name = "password")
    public String password;

    @Column(name = "timestamp")
    public long timestamp;

    public UserEntity() {}

    public UserEntity(
        String name,
        String password
    ) {
        this.name = name;
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", name='" + name + '\'' + ", password='" + password + '\'' + ", timestamp="
                + timestamp + '}';
    }
}
