Ext.define('mHorner.mlb.store.Team', {
    extend: 'Ext.data.Store',
    config: {
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
    }
});