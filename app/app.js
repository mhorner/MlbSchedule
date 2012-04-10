Ext.application({
    name: 'mHorner.mlb',
    models: ['mHorner.mlb.model.Team'],
    stores: ['mHorner.mlb.store.Team', 'mHorner.mlb.store.ChildController'],
    controllers: ["mHorner.mlb.controller.MlbSchedule", 'mHorner.mlb.controller.TeamNews'],
    viewport: {autoMaximize: true},
    
    refs: {
        mlb: "#mlb"
    },
    
    launch: function() {
        var controller = this.getController('MlbSchedule');

        this.navigation = Ext.create("mHorner.mlb.controller.Navigation", {
            items: [{
                title: 'MLB',
                items: [
                    controller.getView()
                ]
            }]
        });
        
        Ext.Viewport.add(this.navigation);
        this.initializeListeners();
    },
    
    initializeListeners: function() {
        var mlb = this.getController("MlbSchedule");
        
        mlb.on("teamSelected", this.showTeamNews, this);
    },
    
    showTeamNews: function(record) {
        var teamNews = this.getController("TeamNews");
        
        this.navigation.push(teamNews.getView(record));
    }
});