package com.example.demo.repository.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "TB_ADMIN")
public class Admin implements Serializable {
    @Column(name = "AdminSeq")
    @Id
    private int AdminSeq;

    @Column(name = "AdminID")
    private String AdminID;

    @Column(name = "AdminPw")
    private String AdminPw;

    @Column(name = "AdminName")
    private String AdminName;

    @Column(name = "AdminEmail")
    private String AdminEmail;

    @Column(name = "AdminPhone")
    private String AdminPhone;

    public int getAdminSeq() {
        return AdminSeq;
    }

    public void setAdminSeq(int adminSeq) {
        AdminSeq = adminSeq;
    }

    public String getAdminID() {
        return AdminID;
    }

    public void setAdminID(String adminID) {
        AdminID = adminID;
    }

    public String getAdminPw() {
        return AdminPw;
    }

    public void setAdminPw(String adminPw) {
        AdminPw = adminPw;
    }

    public String getAdminName() {
        return AdminName;
    }

    public void setAdminName(String adminName) {
        AdminName = adminName;
    }

    public String getAdminEmail() {
        return AdminEmail;
    }

    public void setAdminEmail(String adminEmail) {
        AdminEmail = adminEmail;
    }

    public String getAdminPhone() {
        return AdminPhone;
    }

    public void setAdminPhone(String adminPhone) {
        AdminPhone = adminPhone;
    }
}
