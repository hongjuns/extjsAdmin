package com.example.demo.service.impl;

import com.example.demo.repository.ApiDao;
import com.example.demo.repository.entity.Product;
import com.example.demo.service.apiService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class apiserServiceImpl implements apiService {

    @Autowired
    private ApiDao apiDao;

    @Override
    public List<Map<String, Object>> listProduct(Product param)  {
            return apiDao.listProduct(param);
    }

    @Override
    public Long listProductTotalCount(Product param) {
        return apiDao.listProductTotalCount(param);
    }

    @Transactional
    @Override
    public void insertProduct(Product param) {
        String NextSeq = apiDao.nextProductSeq();
        param.setProductSeq( Integer.parseInt(NextSeq));
        apiDao.insertProduct(param);
    }

    @Override
    public void deleteProduct(Product param) {
        apiDao.deleteProduct(param);
    }

    @Override
    public void updateProduct(Product param) {
        apiDao.updateProduct(param);
    }
}
