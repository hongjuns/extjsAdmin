Ext.define('Study.view.window.UpdataPassword', {
    extend: 'Ext.window.Window',
    xtype: 'updatePassword',
    width :350,
    height :200,
    title:'비밀번호 변경',
    autoShow: true,
    modal : true,
    items :[{
      xtype :'form',
        margin : 20,
      items :[{
          xtype :'textfield',
          inputType : 'password',
          fieldLabel : '비밀번호'
      },{
          xtype :'textfield',
          inputType : 'password',
          fieldLabel : '비밀번호 확인'
      }]
    }],
    bbar : [{
        xtype :'button',
        text : '비밀번호 변경'
    },{
        xtype: 'button',
        text:'닫기'
    }]
});