Ext.application({
    name: 'mHorner.mlb',
    models: ['mHorner.mlb.model.Team'],
    controllers: ["mHorner.mlb.controller.MlbSchedule"],
    viewport: {autoMaximize: true},
    
    launch: function() {
        Ext.Viewport.add(Ext.create("mHorner.mlb.controller.Navigation", {
            items: [{
                title: 'MLB',
                items: [{
                    xtype: 'list',
                    store: 'Team',
                    ui: 'round',
                    onItemDisclosure: true,
                    itemTpl: "{teamName}"
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