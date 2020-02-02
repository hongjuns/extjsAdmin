/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'Study',

    extend: 'Study.Application',

    requires: [
        'Study.view.main.Main'
    ],

    launch : function (){
        Ext.Ajax.request({
            url :'/api/sessionCheck',
            method :'POST',
            success : function (res) {
                console.log(res);
                var api = Ext.decode(res.responseText);
                if (api.code == 999){
                    Ext.widget("login");
                    console.log("if문");
                }else {
                    Ext.widget("main");
                    console.log("else문");
                }
            }
        });

    }

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
   // mainView: 'Study.view.main.Main'

    //-------------------------------------------------------------------------
    // Most customizations should be made to Study.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
