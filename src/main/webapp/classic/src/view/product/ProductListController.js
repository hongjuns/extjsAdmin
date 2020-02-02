/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.product.ProductListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productListController',

    /**
     * 상품등록 함수
     * @param btn
     * @return String
     */
    addProduct : function (btn){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var url ="";

        var params = {
            productNm : viewModel.get("itemNm"),
            price : viewModel.get("itemPrc"),
            amount : viewModel.get("itemAmt"),
        }

        if (viewModel.get("itemSeq") > 0){
            params.productSeq = viewModel.get("itemSeq");
            url ="/api/update/product";
        }else {
            url ="/api/insert/product";
        }

        Ext.Ajax.request({
            url : url,
            method :'POST',
            params : params,
            success : function (res) {
                var data =Ext.decode(res.responseText);
                if(data.code=="200"){
                    viewModel.getStore("productList").reload();
                    Ext.Msg.alert("Msg",data.msg);

                }
            },
            failure: function(res) {
                Ext.Msg.alert("Msg",data.msg);
                console.log("failure" + res)
            }
        })

        me.resetProduct();
    },

    /**
     * 초기화 함수
     * @param btn
     */
    resetProduct : function (btn){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();

        this.view.down('#itemNm').setValue('');
        this.view.down('#itemPrc').setValue('');
        this.view.down('#itemAmt').setValue('');

        viewModel.set("itemSeq","");
        viewModel.set("itemNm", "");
        viewModel.set("itemPrc", "");
        viewModel.set("itemAmt", "");


    },

    /**
     * 검색 함수
     * @param btn
     * @return String
     */
    SearchProduct : function (btn){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();

        var searchNm = me.view.down('#searchNm').getValue();
        var productGrid = this.view.down('#productGrid').getStore();
        productGrid.clearFilter();
        productGrid.filterBy(function(record) {
            var productNm = record.data.PRODUCTNM;
            console.log(productNm);
            var returnFlag = true;

            if(returnFlag){
                if(searchNm !== null && searchNm !== ''){
                    if(searchNm == productNm){
                        returnFlag = true;
                    }else{
                        returnFlag = false;
                    }
                }
            }
            return returnFlag;
        });
    },

    /**
     * 삭제 함수
     * @param btn
     * @return String
     */
    deleteProduct : function (btn) {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();

        var record = btn.getWidgetRecord();
        var Seq = record.data.PRODUCTSEQ;

        var params = {
            productSeq : record.data.PRODUCTSEQ
        }

        Ext.Ajax.request({
            url : '/api/delete/product',
            method :'POST',
            params : params,
            success : function (res) {
                var data =Ext.decode(res.responseText);
                if(data.code=="200"){
                    viewModel.getStore("productList").reload();
                    Ext.Msg.alert("Msg",data.msg);
                }
            },
            failure: function(res) {
                Ext.Msg.alert("Msg",data.msg);
                console.log("failure" + res)
            }
        })

    },

    beforeRenderData : function (obj) {
        this.view.down('#productidx').setHidden(true);
    },

    /**
     * 정보수정 함수
     * @param record
     * @return String
     */
    updateProduct : function (obj, td, cellIndex, record, tr, rowIndex) {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();

        viewModel.set("itemSeq",record.data.PRODUCTSEQ);
        viewModel.set("itemNm", record.data.PRODUCTNM);
        viewModel.set("itemPrc", record.data.PRICE);
        viewModel.set("itemAmt", record.data.AMOUNT);
    },


});
