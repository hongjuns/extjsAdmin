/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Study.view.order.OrderListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.orderList',
    stores :{
        orderList :{
            fields : ['productNm','price','amount','regDate'],
            data :[{
                productNm : '연필',
                price : '500',
                amount : '100',
                regDate : new Date()
            },{
                productNm : '지우개',
                price : '500',
                amount : '100',
                regDate : new Date()
            },{
                productNm : '색연필',
                price : '500',
                amount : '100',
                regDate : new Date()
            }, {
                productNm: '칠판',
                price: '500',
                amount: '100',
                regDate: new Date()
            }]
        }
    }


    //TODO - add data, formulas and/or methods to support your view
});
