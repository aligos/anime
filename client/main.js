import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import commentsModule from './modules/comments';

import appModule from './modules/app';
import adminModule from './modules/admin';
import colorsModule from './modules/colors';
import animeModule from './modules/anime';


// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(commentsModule);

app.loadModule(appModule);
app.loadModule(adminModule);
app.loadModule(colorsModule);
app.loadModule(animeModule);

app.init();
