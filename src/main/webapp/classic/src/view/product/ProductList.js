Ext.define('Study.view.product.ProductList', {
    extend: 'Ext.panel.Panel',
    xtype: 'productList',
    title :'상품목록',
    margin :15,
    viewModel :'ProductList',
    controller : 'productListController',
    items:[{
       xtype :'toolbar',
       items:[{
           xtype:'textfield',
           flex :1,
           fieldLabel :'상품명',
           itemId: 'itemNm',
           bind : {
               value :'{itemNm}'
           }
       },{
           xtype: 'numberfield',
           flex :1,
           fieldLabel :'가격',
           itemId: 'itemPrc',
           bind :{
               value :'{itemPrc}'
           }
       },{
           xtype: 'numberfield',
           flex :1,
           fieldLabel :'재고량',
           itemId: 'itemAmt',
           bind :{
               value :'{itemAmt}'
           }
       },{
           xtype:'button',
           flex :0.3,
           text:'등록',
           handler : 'addProduct'
       },{
           xtype:'button',
           flex :0.3,
           text : '초기화',
           handler : 'resetProduct'
       }]
    },{
        xtype: 'grid',
        columLines : true,
        itemId: 'productGrid',
        plugins : 'rowediting',
        tbar :[{
            xtype:'textfield',
            itemId: 'searchNm',
            flex :1,
            emptyText:'검색어를 입력해주세요'
        },{
            xtype:'button',
            flex :0.2,
            text:'검색',
            handler : 'SearchProduct'
        }],
        columns:[{
            xtype:'rownumberer'
        },{
            itemId: 'productidx',
            dataIndex :'PRODUCTSEQ',
        },{
            text:'상품명',
            flex:1,
            dataIndex :'PRODUCTNM',
            editor : {
                xtype :'textfield',
            }
        },{
            text :'가격',
            flex: 1,
            dataIndex: 'PRICE'
        },{
            text:'재고량',
            flex:1 ,
            dataIndex: 'AMOUNT'
        },{
            text:'등록일',
            flex:1,
            dataIndex: 'REGDATE',
            renderer : function (value) {
                return Ext.util.Format.date(new Date (value),"Y-m-d H:i");

            }
        },{
            xtype: 'widgetcolumn',
            text :'삭제',
            flex : 1,
            widget :{
                xtype : 'button',
                text :'상품삭제',
                handler : 'deleteProduct',
            }
        }],
        bind :{
            store: '{productList}'
        },
        listeners: {
            beforeRender : 'beforeRenderData',
            cellclick : 'updateProduct',
        },
    }],
    // store : {
    //     fields : ['productNm','price','amount','regDate'],
    //     data : [{
    //         productNm : '지우개',
    //         price : '500',
    //         amount : '100',
    //         regDate : new Date()
    //     },{
    //         productNm : '지우개',
    //         price : '500',
    //         amount : '100',
    //         regDate : new Date()
    //     }]
    // }
});