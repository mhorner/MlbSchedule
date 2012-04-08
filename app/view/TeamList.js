Ext.define("mHorner.mlb.view.TeamList", {
    extend: 'Ext.dataview.List',
    xtype: 'teamList',
    config: {
        xtype: 'list',
        store: 'Team',
        ui: 'round',
        onItemDisclosure: this.onItemTap,
        itemTpl: "{teamName}"
    },
    
    onItemTap: function(dataView, index, target, record, event, options) {
        Ext.Msg.alert("team tapped", "going to the team view");
    }
});

