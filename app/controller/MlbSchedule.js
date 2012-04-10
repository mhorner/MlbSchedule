Ext.define("mHorner.mlb.controller.MlbSchedule", {
    extend: "Ext.app.Controller",
    mixins:['Ext.mixin.Observable'],
    
    config: {
        id: 'mlb',
        views: ['mHorner.mlb.view.TeamList'],
        refs: {
            teamList: "#teamList"
        }
    },
    
    getView: function() {
        var tList = this.getTeamList();
        if (!tList) {
            tList = Ext.create(this.getViews()[0]);
            this.initializeListeners();
        }
        
        return tList;
    },
    
    initializeListeners: function() {
        var tList = this.getTeamList();
        
        tList.on("itemtap", this.drillInOnTeam, this);
    },
    
    drillInOnTeam: function(dataView, index, target, record, event, options) {
        console.log(this.fireEvent("teamSelected", record));
    }
});