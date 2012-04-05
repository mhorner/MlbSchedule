Ext.create('Ext.data.Store', {
    model: 'mHorner.mlb.model.Team',
    storeId: 'Team',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/team.json',
        reader: {
            type: 'json'
        }
    }
});