package com.lisy09.k8s_project_template.examples.commodity_recsys.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name=ProductEntity.TABLE_NAME)
public class ProductEntity {
    public static final String TABLE_NAME = "product";

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @JsonIgnore
    public int id;

    @Column(name="product_id")
    public int productId;

    @Column(name="`name`")
    public String name;

    @Column(name="image_url")
    public String imageUrl;

    @Column(name="categories")
    public String categories;

    @Column(name="tags")
    public String tags;

    public double score;

    public ProductEntity() {}

    public ProductEntity(
        int productId,
        String name,
        String imageUrl,
        String categories,
        String tags
    ) {
        this.productId = productId;
        this.name = name;
        this.imageUrl = imageUrl;
        this.categories = categories;
        this.tags = tags;
    }

    @Override
    public String toString() {
        return "ProductEntity{" + 
            "id=" + id + 
            ", productId=" + productId + 
            ", name='" + name + '\'' + 
            ", imageUrl='" + imageUrl + '\'' +
            ", categories='" + categories + '\'' + 
            ", tags='" + tags + '\'' + '}';
    }
}
