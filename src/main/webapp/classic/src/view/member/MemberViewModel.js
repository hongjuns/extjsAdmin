/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Study.view.member.MemberListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.memberList',
    stores :{
        memberList :{
            fields : ['productNm','price','amount','regDate'],
            data :[{
                productNm : '1',
                price : '500',
                amount : '100',
                regDate : new Date()
            },{
                productNm : '2',
                price : '500',
                amount : '100',
                regDate : new Date()
            },{
                productNm : '3',
                price : '500',
                amount : '100',
                regDate : new Date()
            }, {
                productNm: '4',
                price: '500',
                amount: '100',
                regDate: new Date()
            }]
        }
    }


    //TODO - add data, formulas and/or methods to support your view
});
