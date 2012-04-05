mHorner.enableCaching = false; // false - stamps will be used.
mHorner.stampOverride = 9;
//mHorner.stampOverride = null;
mHorner.js = {
    prefix: 'app/',
    files: [
        /* models */
        'model/ChildController.js',
        'model/Team.js',
       /* stores */
       'store/ChildController.js',
       'store/Team.js',
       /* controllers */
       'controller/Navigation.js',
       'controller/MlbSchedule.js'
   ]
};
