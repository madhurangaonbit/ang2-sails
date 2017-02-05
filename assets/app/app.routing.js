"use strict";
const router_1 = require('@angular/router');
const user_component_1 = require('./components/user.component');
const about_component_1 = require('./components/about.component');
const appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map