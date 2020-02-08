/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Study.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    stores: {
        recordset: {
            data: [
                {group: '서울',  gubun:'1', price1:102920, price2:120010, price3:302920 },
                {group: '인천',  gubun:'2', price1:760000, price2:890100, price3:230100 },
                {group: '수원',  gubun:'3', price1:120010, price2:301000, price3:129000 },
                {group: '고양',  gubun:'4', price1:420100, price2:203000, price3:400000 },
                {group: '성남',  gubun:'5', price1:190100, price2:902000, price3:250390 }
            ],
            fields:['group', 'price1', 'price2','price3']
        }
    }
});
