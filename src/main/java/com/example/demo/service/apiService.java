package com.example.demo.service;

import com.example.demo.repository.entity.Product;
import java.util.List;
import java.util.Map;

public interface apiService {

    public List<Map<String,Object>> listProduct(Product param);
    public Long listProductTotalCount(Product param);
    public void insertProduct (Product param);
    public  void deleteProduct (Product param);
    public void updateProduct (Product param);
}
