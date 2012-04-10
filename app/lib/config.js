mHorner.enableCaching = false; // false - stamps will be used.
mHorner.stampOverride = 11;
//mHorner.stampOverride = null;
mHorner.js = {
    prefix: 'app/',
    files: [
        /* utility classes */
        'EventManager.js',
        /* views */
        'view/TeamList.js',
        /* models */
        'model/ChildController.js',
        'model/Team.js',
       /* stores */
       'store/ChildController.js',
       'store/Team.js',
       /* controllers */
       'controller/Navigation.js',
       'controller/MlbSchedule.js',
       'controller/TeamNews.js',
       'app.js'
   ]
};
