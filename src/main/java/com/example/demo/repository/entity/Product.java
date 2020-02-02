package com.example.demo.repository.entity;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "TB_PRODUCT")
public class Product implements Serializable {

    @Column(name = "PRODUCTSEQ")
    @Id
    private Integer productSeq;
    @Column(name = "PRODUCTNM")
    private String productNm;
    @Column(name = "PRICE")
    private Integer price;
    @Column(name = "AMOUNT")
    private Integer amount;
    @Column(name = "REGDATE")
    private Date regDate;
    private String searchValue;
    private int start;
    private int limit;

    public Integer getProductSeq() {
        return productSeq;
    }

    public void setProductSeq(Integer productSeq) {
        this.productSeq = productSeq;
    }

    public String getProductNm() {
        return productNm;
    }

    public void setProductNm(String productNm) {
        this.productNm = productNm;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    public String getSearchValue() {
        return searchValue;
    }

    public void setSearchValue(String searchValue) {
        this.searchValue = searchValue;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }
}
