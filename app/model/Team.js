Ext.define("mHorner.mlb.model.Team", {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                 {name: 'teamName'},
                 {name: 'city'},
                 {name: 'teamRSSUrl'}
        ]
    }
});