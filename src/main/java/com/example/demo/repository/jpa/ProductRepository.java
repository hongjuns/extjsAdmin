package com.example.demo.repository.jpa;

import com.example.demo.repository.entity.Movie;
import com.example.demo.repository.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>  {
}
