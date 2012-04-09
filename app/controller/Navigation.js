Ext.define("mHorner.mlb.controller.Navigation", {
    extend: 'Ext.app.Controller',
    
    config: {
        id: 'nav',
        models: ['mHorner.mlb.model.Team'],
        stores: ['mHorner.mlb.store.Team'],
//        controllers: ["mHorner.mlb.controller.MlbSchedule"],
        refs: {
           mlb: "#mlb"
        },
//        layout: 'fit',
    },
    
    launch: function() {
        this.navigation = Ext.create("Ext.navigation.View", {
            fullScreen: true,
            docked: 'top',
            items: [{
                title: 'MLB'
            }]
        });
//        this.items.push(navigation);
        
        var mlb = Ext.create("mHorner.mlb.controller.MlbSchedule", {application: this.getApplication()});
        this.navigation.push(mlb.getView());
    }
});