package com.lisy09.k8s_project_template.examples.commodity_recsys.backend.entity;

public class RecommendEntity {
    public int productId;
    public double score;

    public RecommendEntity(
        int productId,
        double score
    ) {
        this.productId = productId;
        this.score = score;
    }

    @Override
    public String toString() {
        return "RecommendEntity{" + "productId=" + productId + ", score=" + score + '}';
    }
}
