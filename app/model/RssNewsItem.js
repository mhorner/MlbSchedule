Ext.define("mHorner.mlb.model.RssNewsItem", {
    extend: 'Ext.data.Model',
    fields: [
         {name: 'title'},
         {name: 'link'},
         {name: 'descritpion'},
         {name: 'pubDate'},
         {name: 'category'},
         {name: 'guid'}
     ]
});