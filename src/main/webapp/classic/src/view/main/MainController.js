/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    passWordChange : function (btn){
        Ext.widget("updatePassword");
    },

    logout : function (btn){
        btn.up("viewport").destroy();
        Ext.widget("login");
    },

    changeMenu : function (obj,record){
        var centerPage = obj.up("viewport").down("component[region=center]");
        console.log(record.get("page"));
        centerPage.removeAll(true);
        centerPage.add({
            xtype : record.get("page")
        })
    }

});
