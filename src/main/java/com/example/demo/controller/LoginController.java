package com.example.demo.controller;

import com.example.demo.repository.AdminDao;
import com.example.demo.repository.entity.Admin;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
public class LoginController {

    @Autowired
    AdminDao adminDao;

    Logger logger = LoggerFactory.getLogger(LoginController.class);

    @RequestMapping(value = "/loginInfo", method = RequestMethod.POST)
    public Map<String,Object> loginInfo(Admin admin, HttpServletRequest request) throws NullPointerException   {
        Map<String,Object> result = null;
        try{
            result = adminDao.selectName(admin);
            result.put("code","200");
            request.getSession().setAttribute("admin",result);
        }catch (Exception e){
         logger.info(e.getMessage());
         result = new HashMap<String, Object>();
         result.put("code","999");
         result.put("msg",e.getMessage());
        }
        return result;
    }

    @RequestMapping(value = "/fail")
    public Map<String,Object> faill()  {
        Map<String,Object> result = new HashMap<String, Object>();
        result.put("code","999");
        return result;
    }
}
