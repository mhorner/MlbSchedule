Ext.define("mHorner.mlb.store.RssNews", {
    extend: 'Ext.data.Store',
    config: {
        model: 'mHorner.mlb.model.RssNewsChannel',
        storeId: 'newsChannel',
        teamUrlFormat: "http://sports.yahoo.com/mlb/teams/{0}/rss.xml"
    },
    
    constructor: function(config) {
        var teamAbbr = config.teamAbbr;
        
        this.createTeamProxy(teamAbbr);
    },
    
    createTeamProxy: function(teamAbbr) {
        var url = Ext.String.format(this.teamUrlFormat, teamAbbr);
        
        var proxy = new mHorner.mlb.store.proxy.TeamProxy({
            url: url
        });
        
        return proxy;
    }
});