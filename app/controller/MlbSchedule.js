Ext.define("mHorner.mlb.controller.MlbSchedule", {
    extend: "Ext.app.Controller",
    
    config: {
        id: 'mlb',
        control: {
            model: ['mhorner.mlb.model.Team'],
            stores: ['mHorner.mlb.store.Team'],
            views: ['mHorner.mlb.view.TeamList'],
            list: {
                select: 'onTeamListTap'
            },
            refs: {
                list: '#teamList'
            }
        }
    },
    
//    activate: function() {
//        Ext.Msg.alert("View", "A view should be show here");
//    },
//    
//    onTeamListTap: function(dataView, index, target, record, event, options) {
//        var appl = this.getApplication(),
//            teamName = record.getTeamName(),
//            teamNews = appl.getController("mHorner.mlb.controller.TeamNews");
//    },
//    
    getView: function() {
        return this.getViews()[0];
    }
});