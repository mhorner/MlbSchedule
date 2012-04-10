Ext.define("mHorner.mlb.view.TeamList", {
    extend: 'Ext.dataview.List',
    xtype: 'teamList',
    id: 'teamList',
    config: {
        store: 'Team',
        ui: 'round',
        onItemDisclosure: true,
        itemTpl: "{teamName}"
    }
});

