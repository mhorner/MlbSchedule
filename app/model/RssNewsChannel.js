Ext.define("mHorner.mlb.model.RssNewsChannel", {
    extend: 'Ext.data.Model',
    config: {
        fields: [
             {name: 'ttl'},
             {name: 'copyright'},
             {name: 'languange'},
             {name: 'image'},
             {name: 'description'},
             {name: 'title'},
             {name: 'link'}
        ],
        associations: [
            {type: 'hasMany', model: 'mHorner.mlbSchedule.model.RssNewsItem', name: 'items'}
        ]
    }
});