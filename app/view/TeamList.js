Ext.define("mHorner.mlb.view.TeamList", {
    extend: 'Ext.dataview.List',
    xtype: 'teamList',
    id: 'teamList',
    config: {
        xtype: 'list',
        store: 'Team',
        ui: 'round',
        onItemDisclosure: true,
        itemTpl: "{teamName}"
    },
    
    onItemTap: function(dataView, index, target, record, event, options) {
    }
});

