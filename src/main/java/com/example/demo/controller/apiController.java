package com.example.demo.controller;

import com.example.demo.repository.AdminDao;
import com.example.demo.repository.ApiDao;
import com.example.demo.repository.entity.Product;
import com.example.demo.service.apiService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Slf4j
@RestController
@RequestMapping(value = "/api/")
public class apiController {

    @Autowired
    private ApiDao apiDao;

    @Autowired
    private apiService apiService;


    Logger logger = LoggerFactory.getLogger(apiController.class);

    /**
     * 세션체크 API
     * @param req
     * @return
     */
    @RequestMapping(value = "/sessionCheck", method = RequestMethod.POST)
    public Map<String,Object> sessionCheck(HttpServletRequest req ) {
        Map <String,Object> result = new HashMap<String, Object>();
        result.put("code",200);
        return  result;
    }

    /**
     * 상품목록 조회 API
     * @param param
     * @param request
     * @return Map<String,Object>
     */
    @RequestMapping(value="/list/product", method=RequestMethod.POST)
    public Map<String,Object> listProduct(HttpServletRequest request, Product param) {
        Map<String, Object> result = new HashMap<String,Object>();
        List<Map<String,Object>> data = null;
        try {
            // 1. Total Count 조회
            Long totalCount = 0L;
            totalCount = apiService.listProductTotalCount(param);

            if(totalCount > 0) {
                data = apiService.listProduct(param);
            }

            result.put("code", 200);
            result.put("totalCount", totalCount);
            result.put("data", data);
        } catch (Exception e) {
            e.printStackTrace();
            result.put("code", e.getMessage());
            result.put("msg", "상품조회 실패");
            return result;
        }
        return result;
    }

    /**
     * 상품등록 조회 API
     * @param param
     * @param request
     * @return Map<String,Object>
     */
    @RequestMapping(value="/insert/product", method=RequestMethod.POST)
    public Map<String,Object> insertProduct(HttpServletRequest request, Product param) {
        Map<String, Object> result = new HashMap<String,Object>();
        try {
            apiService.insertProduct(param);
            result.put("code", 200);
            result.put("msg", "등록이 완료되었습니다.");
        } catch (Exception e) {
            e.printStackTrace();
            result.put("code", e.getMessage());
            result.put("msg", "등록 실패");
        }
        return result;
    }

    /**
     * 상품삭제  API
     * @param param
     * @param request
     * @return Map<String,Object>
     */
    @RequestMapping(value="/delete/product", method=RequestMethod.POST)
    public Map<String,Object> deleteProduct(HttpServletRequest request, Product param) {
        Map<String, Object> result = new HashMap<String,Object>();
        try {
            apiService.deleteProduct(param);
            result.put("code", 200);
            result.put("msg", "삭제가 완료되었습니다.");
        } catch (Exception e) {
            e.printStackTrace();
            result.put("code", e.getMessage());
            result.put("msg", "삭제 실패");
        }
        return result;
    }

    /**
     * 상품수정  API
     * @param param
     * @param request
     * @return Map<String,Object>
     */
    @RequestMapping(value="/update/product", method=RequestMethod.POST)
    public Map<String,Object> updateProduct(HttpServletRequest request, Product param) {
        Map<String, Object> result = new HashMap<String,Object>();
        try {
            apiService.updateProduct(param);
            result.put("code", 200);
            result.put("msg", "수정이 완료되었습니다.");
        } catch (Exception e) {
            e.printStackTrace();
            result.put("code", e.getMessage());
            result.put("msg", "수정 실패");
        }
        return result;
    }
}
