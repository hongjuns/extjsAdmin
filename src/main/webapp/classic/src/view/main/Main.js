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
    viewModel :'main',
    items :[{
        xtype : 'panel',
        region : 'north',
        header : false,
        items : [{
            xtype: 'toolbar',
            cls :'top',
            items : [{
                xtype:'label',
                html: '<h2> Market Admin</h2>',
                page :'main',
            },'->',{
                xtype: 'button',
                scale : 'large',
                ui :'materialbtn',
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
        //split :true,
        region: 'west',
        border :true,
        width:200,
        layout :'fit',
        items :[{
            xtype : 'treelist',
            ui :'menulist',
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
        xtype :'container',
        region: 'center',
        layout :'fit',
        items:[{
            xtype :'panel',
            layout:'vbox',
            items:[{
                margin: 10,
                width: '100%',
                height: '30%',
                xtype: 'cartesian',
                bind: { // 2
                    store: '{recordset}'    // 3
                },
                axes: [{
                    type: 'numeric',
                    position: 'left',
                    fields: ['price1'],
                    title: {
                        text: 'Sample Values',
                        fontSize: 15
                    },
                    grid: true,
                    minimum: 0
                }, {
                    type: 'category',
                    position: 'bottom',
                    fields: ['group'],
                    title: {
                        text: 'Sample Values',
                        fontSize: 15
                    }
                }],
                series: [{
                    type: 'line',
                    style: {
                        stroke: '#30BDA7',
                        lineWidth: 2
                    },
                    xField: 'group',
                    yField: 'price1',
                    marker: {
                        type: 'path',
                        path: ['M', - 4, 0, 0, 4, 4, 0, 0, - 4, 'Z'],
                        stroke: '#30BDA7',
                        lineWidth: 2,
                        fill: 'white'
                    }
                }, {
                    type: 'line',
                    fill: true,
                    style: {
                        fill: '#96D4C6',
                        fillOpacity: .6,
                        stroke: '#0A3F50',
                        strokeOpacity: .6,
                    },
                    xField: 'group',
                    yField: 'price2',
                    marker: {
                        type: 'circle',
                        radius: 4,
                        lineWidth: 2,
                        fill: 'white'
                    }
                }]
            },{
                margin: 10,
                width: '100%',
                height: '30%',
                xtype: 'cartesian',
                bind: { // 2
                    store: '{recordset}'    // 3
                },
                axes: [{
                    type: 'numeric',
                    position: 'left',
                    fields: ['price1'],
                    title: {
                        text: 'Sample Values',
                        fontSize: 15
                    },
                    grid: true,
                    minimum: 0
                }, {
                    type: 'category',
                    position: 'bottom',
                    fields: ['group'],
                    title: {
                        text: 'Sample Values',
                        fontSize: 15
                    }
                }],
                series: [{
                    type: 'line',
                    style: {
                        stroke: '#30BDA7',
                        lineWidth: 2
                    },
                    xField: 'group',
                    yField: 'price1',
                    marker: {
                        type: 'path',
                        path: ['M', - 4, 0, 0, 4, 4, 0, 0, - 4, 'Z'],
                        stroke: '#30BDA7',
                        lineWidth: 2,
                        fill: 'white'
                    }
                }, {
                    type: 'line',
                    fill: true,
                    style: {
                        fill: '#96D4C6',
                        fillOpacity: .6,
                        stroke: '#0A3F50',
                        strokeOpacity: .6,
                    },
                    xField: 'group',
                    yField: 'price2',
                    marker: {
                        type: 'circle',
                        radius: 4,
                        lineWidth: 2,
                        fill: 'white'
                    }
                }]
            },
                {
                    margin: 10,
                    width: '100%',
                    height: '30%',
                    xtype: 'cartesian',
                    bind: { // 2
                        store: '{recordset}'    // 3
                    },
                    axes: [{
                        type: 'numeric',
                        position: 'left',
                        fields: ['price1'],
                        title: {
                            text: 'Sample Values',
                            fontSize: 15
                        },
                        grid: true,
                        minimum: 0
                    }, {
                        type: 'category',
                        position: 'bottom',
                        fields: ['group'],
                        title: {
                            text: 'Sample Values',
                            fontSize: 15
                        }
                    }],
                    series: [{
                        type: 'line',
                        style: {
                            stroke: '#30BDA7',
                            lineWidth: 2
                        },
                        xField: 'group',
                        yField: 'price1',
                        marker: {
                            type: 'path',
                            path: ['M', - 4, 0, 0, 4, 4, 0, 0, - 4, 'Z'],
                            stroke: '#30BDA7',
                            lineWidth: 2,
                            fill: 'white'
                        }
                    }, {
                        type: 'line',
                        fill: true,
                        style: {
                            fill: '#96D4C6',
                            fillOpacity: .6,
                            stroke: '#0A3F50',
                            strokeOpacity: .6,
                        },
                        xField: 'group',
                        yField: 'price2',
                        marker: {
                            type: 'circle',
                            radius: 4,
                            lineWidth: 2,
                            fill: 'white'
                        }
                    }]
                }],
        }]
    }]
});
