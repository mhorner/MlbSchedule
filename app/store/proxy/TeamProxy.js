Ext.define("mHorner.mlb.store.proxy.TeamProxy", {
    extend: 'Ext.data.proxy.Ajax',
    config: {
        reader: {
            type: 'xml'
        }
    }
});