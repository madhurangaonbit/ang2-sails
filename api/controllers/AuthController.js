/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    testHttpRequest : function (req,res) {

        console.log(req.body,"testHttpRequest function initialized");
        User.create(req.body).exec(function (err, app) {
            if (err) res.send(err);

            res.send({
                app: app,
                message: "New Record Successfully created"
            });
        });




    }



};

