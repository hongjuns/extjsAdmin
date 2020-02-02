package com.example.demo.repository;

import com.example.demo.repository.entity.Product;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Repository
public class ApiDao {
    protected static final String NAMESPACE = "com.express.magarine.api.";

    @Autowired
    private SqlSession sqlSession;

    public String selectName(){
        return sqlSession.selectOne(NAMESPACE + "selectName");
    }

    public List<Map<String,Object>> listProduct(Product param) {
        return sqlSession.selectList(NAMESPACE + "selectProdict",param);
    }

    public Long listProductTotalCount(Product param)  {
        return sqlSession.selectOne(NAMESPACE + "selectProductTotalCount", param);
    }

    public void insertProduct (Product product){
        sqlSession.insert(NAMESPACE + "insertProduct",product);
    }

    public String nextProductSeq(){
        return  sqlSession.selectOne(NAMESPACE + "nextProductSeq");
    }

    public void deleteProduct (Product product){
        sqlSession.delete(NAMESPACE + "deleteProduct",product);
    }

    public void updateProduct (Product product){
        sqlSession.update(NAMESPACE + "updateProduct",product);
    }
}