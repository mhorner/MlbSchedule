Ext.application({
    name: 'mHorner.mlb',
//    models: ['mHorner.mlb.model.Team'],
//    stores: ['mHorner.mlb.store.Team'],
//    controllers: ["mHorner.mlb.controller.MlbSchedule", "mHorner.mlb.controller.TeamNews"],
    controllers: ['mHorner.mlb.controller.Navigation'],
    viewport: {autoMaximize: true},

//    _buildChildControllerStore: function() {
//        var store = Ext.StoreManager.lookup('ChildController');
//        Ext.each(this.getControllers(), function(controller) {
//            store.add(Ext.create("childcontroller", {'controller': controller}));
//        });
//    }
});