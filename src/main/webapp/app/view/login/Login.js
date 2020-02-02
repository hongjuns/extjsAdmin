/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    layout : 'center',
    closable : false,
    maximized : true,
    autoShow : true,

    items :[{
        xtype : 'form',
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'center'
        },
        items :[{
            xtype : 'textfield'
        },{
            xtype : 'textfield',
            inputType :'password'
        }, {
            xtype :'button',
            text : 'Login',
            handler : function(btn){
                alert("Test");
                btn.up("window").close();
                Ext.widget("main");
            }
        }]
    }]
});
