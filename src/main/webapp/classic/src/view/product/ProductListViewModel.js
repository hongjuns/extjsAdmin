/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Study.view.product.ProductListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ProductList',
    data : {
        itemSeq:'',
        itemNm : '',
        itemPrc : 0,
        itemAmt :0
    },
    stores :{
        productList :{
            proxy : {
                type: 'ajax',
                actionMethods: {
                    read: 'POST'
                },
                url: '/api/list/product',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'totalCount'
                }
            },
            autoLoad: true
            // data :[{
            //     productNm : '지우개',
            //     price : '500',
            //     amount : '100',
            //     regDate : new Date()
            // },{
            //     productNm : '지우개',
            //     price : '500',
            //     amount : '100',
            //     regDate : new Date()
            // },{
            //     productNm : '지우개',
            //     price : '500',
            //     amount : '100',
            //     regDate : new Date()
            // }, {
            //     productNm: '지우개',
            //     price: '500',
            //     amount: '100',
            //     regDate: new Date()
            // }]
        }
    }
    //TODO - add data, formulas and/or methods to support your view
});
