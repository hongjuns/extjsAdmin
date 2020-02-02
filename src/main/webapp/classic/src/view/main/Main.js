/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    layout : 'border',
    controller : 'main',
    items :[{
        xtype : 'panel',
        region : 'north',
        header : false,
        items : [{
            xtype: 'toolbar',
            items : [{
                xtype:'label',
                html: '<h2> Market Admin</h2>'
            },'->',{
                xtype: 'button',
                text: 'Hongjun 님',
                menu : [{
                    text : '비밀번호 변경',
                    handler : 'passWordChange'
                },{
                    text : '로그아웃',
                    handler : 'logout'
                }]
            }]
        }]
    },{
        xtype :'panel',
        split :true,
        region: 'west',
        border :true,
        width:200,
        items :[{
            xtype : 'treelist',
            listeners : {
              selectionchange : 'changeMenu'
            },
            store : {
                root : {
                    expanded : true,
                    children : [{
                        text : '상품관리',
                        iconCls :'x-fa fa-gift',
                        expanded : true,
                        slectable : false,
                        children : [{
                            text : '상품목록',
                            page : 'productList',
                            leaf : true
                        }]
                    },{
                        text : '주문관리',
                        expanded : true,
                        iconCls :'x-fa fa-shopping-cart',
                        slectable : false,
                        children : [{
                            text : '주문목록',
                            page : 'orderList',
                            leaf : true
                        }]
                    },{
                        text : '회원관리',
                        expanded : true,
                        iconCls :'x-fa fa-users',
                        slectable : false,
                        children : [{
                            text : '회원목록',
                            page : 'memberList',
                            leaf : true
                        }]
                    }]
                }
            }
        }]
    },{
        xtype :'panel',
        region: 'center',
        border : true,
        layout: 'fit',
        flex :1,
        items : {
            xtype :'panel',
            html : "<h2>Main DashBoards </h2>"
        }
    }]
});
