Ext.define("drp.app.model.projects.costs.StockOutCostModel", {
    extend : "drp.app.model.projects.costs.AbstractCostModel",
    fields : [{
        name : "invoice"
    }],
    proxy : {
        type : 'rest',
        url : 'stockOutCost',
        reader : {
            type : "json",
            root : "data",
            successProperty : 'success',
            totalProperty : 'total'
        },
        writer : {
            type : "json"
        },
        listeners : {
            exception : function(proxy, response, operation) {
                Ext.MessageBox.show({
                    title : '系统出现异常',
                    msg : operation.getError(),
                    icon : Ext.MessageBox.ERROR,
                    buttons : Ext.Msg.OK
                });
            }
        }
    }
});