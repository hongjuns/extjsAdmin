Ext.define('Study.view.order.MemberList', {
    extend: 'Ext.panel.Panel',
    xtype: 'memberList',
    title :'회원목록',
    viewModel :'memberList',
    margin :15,
    columnLines : true,
    items:[{
        tbar: [{
            xtype: 'combo',
            displayField : 'a',
            valueFiled :'b',
            store : {
                fields : ['a','b'],
                data :[{
                    a : 'a',
                    b : 'b',
                },{
                    a : 'c',
                    b : 'c'
                }]
            }
        }]
    },{
        xtype: 'grid',
        plugins : 'cellediting',
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
            dataIndex :'productNm',
            editor : {
                xtype : 'textfield'
            }
        },{
            text :'가격',
            flex: 1,
            dataIndex: 'price',
            editor : {
                xtype : 'textfield'
            }
        },{
            text:'재고량',
            flex:1 ,
            dataIndex: 'amount',
            editor : {
                xtype : 'textfield'
            }
        },{
            text:'등록일',
            flex:1,
            dataIndex: 'regDate',
            editor : {
                xtype : 'textfield'
            }
        }],
        bind :{
            store: '{memberList}'
        }
    }],
    bbar : {
        xtype : 'pagingtoolbar',
        displayField: true,
        plugins : 'ux-slidingpager'
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