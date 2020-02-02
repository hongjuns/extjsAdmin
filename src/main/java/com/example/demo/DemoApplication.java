package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.zaxxer.hikari.HikariDataSource;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        
        SpringApplication.run(DemoApplication.class, args);
                
//        final HikariDataSource ds = new HikariDataSource();
//        ds.setMaximumPoolSize(100);
//        ds.setDriverClassName("oracle.jdbc.driver.OracleDriver");
//        ds.setJdbcUrl("jdbc:oracle:thin:@211.239.124.237:19604:xe");
//        ds.setUsername("dss");
//        ds.setPassword("dss");
//        System.out.println(ds);
    }

}
