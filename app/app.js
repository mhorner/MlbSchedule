Ext.application({
    name: 'mHorner.mlb',
    models: ['mHorner.mlb.model.Team'],
    stores: ['mHorner.mlb.store.Team'],
    controllers: ["mHorner.mlb.controller.MlbSchedule"],
    viewport: {autoMaximize: true},
    
    launch: function() {
        Ext.Viewport.add(Ext.create("mHorner.mlb.controller.Navigation", {
            items: [{
                title: 'MLB',
                items: [{
                    xtype: 'teamList'
                }]
            }]
        }));
    },
    
    _buildChildControllerStore: function() {
        var store = Ext.StoreManager.lookup('ChildController');
        Ext.each(this.getControllers(), function(controller) {
            store.add(Ext.create("childcontroller", {'controller': controller}));
        });
    }
});