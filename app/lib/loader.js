function getAntiCachingStamp() {
    var stamp = "";
    if (!mHorner.enableCaching) {
        stamp = "?_stamp=" + (mHorner.stampOverride ? mHorner.stampOverride : (new Date()).getTime());
    }
    
    return stamp;
}

function generateUrlPack() {
    var stamp = getAntiCachingStamp();
    var mLoad = [];
    
    for (idx in mHorner.js.files) {
        var url = mHorner.js.files[idx]; 
        mLoad.push(mHorner.js.prefix + url + stamp);
    }
    
    console.log(mLoad);
    return mLoad;
}

yepnope([
    {
        load: ['/~matt/touch/sencha-touch-all-200.js', '/~matt/touch/resources/css/apple-200.css'],
        callback: function(url, result, key) {
            Ext.Loader.enabled = false;
            console.log("Sencha Touch loaded :: " + Ext.getVersion().version);
        }
    }, 
    {
        load: generateUrlPack(),
        callback: function(url, result, key) {
            console.log("Loaded " + url);
        }
    }
]);

yepnope({
        load: mHorner.js.prefix + 'app.js' + getAntiCachingStamp()
});