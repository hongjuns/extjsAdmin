/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    //로그인함수
    loginBtn : function (btn){
        //var id = btn.up("form").down("[name=adminId]").getValue();
        var value = btn.up("form").getForm().getValues();
        Ext.Ajax.request({
            url :'/loginInfo',
            method :'POST',
            params :value,
            success : function (res) {
                var api =Ext.decode(res.responseText);
                if(api.code == 200){
                    btn.up("window").close();
                    Ext.widget("main");
                }else{
                    alert("ID/PW 확인 부탁드립니다.");
                    return false;
                }
            }
        });

    }

});
