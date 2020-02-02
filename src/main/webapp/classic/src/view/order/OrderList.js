Ext.define('Study.view.order.OrderList', {
    extend: 'Ext.panel.Panel',
    xtype: 'orderList',
    title :'주문목록',
    viewModel :'orderList',
    columnLines : true,
    items:[{
        tbar: [{
            xtype: 'combo',
            displayField : 'a',
            valueFiled :'b',
            store : {
                data :[{
                    a : 'a',
                    b : 'b'
                },{
                    a : 'c',
                    b : 'c'
                }]
            }
        }]
    },{
        xtype: 'grid',
        columLines : true,
        tbar :[{
            xtype:'textfield',
            emptyText:'검색어를 입력해주세요'
        },{
            xtype:'button',
            text:'검색'
        }],
        columns:[{
            xtype:'rownumberer'
        },{
            text:'상품명',
            flex:1,
            dataIndex :'productNm'
        },{
            text :'가격',
            flex: 1,
            dataIndex: 'price'
        },{
            text:'재고량',
            flex:1 ,
            dataIndex: 'amount'
        },{
            text:'등록일',
            flex:1,
            dataIndex: 'regDate'
        }],
        bind :{
            store: '{orderList}'
        }
    }],
    bbar : {
        xtype : 'pagingtoolbar',
        displayField: true
    }

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