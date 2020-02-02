package com.example.demo.repository;

import com.example.demo.repository.entity.Admin;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class AdminDao {
    protected static final String NAMESPACE = "com.example.demo.admin.";

    @Autowired
    private SqlSession sqlSession;

    public Map<String,Object> selectName(Admin admin){
        return sqlSession.selectOne(NAMESPACE +"selectName",admin);
    }
}
