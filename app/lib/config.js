mHorner.enableCaching = false; // false - stamps will be used.
mHorner.stampOverride = 10;
//mHorner.stampOverride = null;
mHorner.js = {
    prefix: 'app/',
    files: [
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
       'app.js'
   ]
};
