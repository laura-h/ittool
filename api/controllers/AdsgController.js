/**
 * Created by laura on 28.11.15.
 */
module.exports = (function(){
    var _ = require('lodash'),
        fs = require('fs'),
        dateFormat = require('dateformat');

    //function validateData(req, form){
    //    var error = [];
    //
    //    if (!validator.isLength(req.param('categoryDn'), 3, 250))
    //        error.push('udk.dn.error');
    //
    //    if (!validator.isLength(req.param('firstName'), 2, 250))
    //        error.push('udk.first.name.error');
    //
    //    if (!validator.isLength(req.param('lastName'), 2, 250))
    //        error.push('udk.last.name.error');
    //
    //    if (!validator.isLength(req.param('userName'), 2, 250))
    //        error.push('udk.userName.error');
    //
    //    if (!validator.isAlphanumeric(req.param('userName')))
    //        error.push('udk.userName.error.str');
    //
    //    if (form != 'edit') {
    //        if ((req.param('password') && req.param('passwordRe')) && (req.param('password') == req.param('passwordRe'))){
    //            if (!validator.isLength(req.param('password'), 6, 30)) {
    //                error.push('udk.password.length.error');
    //            }
    //        } else {
    //            error.push('udk.password.error');
    //        }
    //
    //        if (!validator.isEmail(req.param('email'))) {
    //            error.push('udk.email.error');
    //        }
    //    }
    //
    //    if (error.length > 0) {
    //        return error;
    //    }
    //
    //    return false;
    //}

    return {
        index: function (req, res) {
            return res.view({title: __("adsg.index.title")});
        },

        get: function (req, res) {
            if(req.param('id') == 'all') {
                adsg.find().exec(function (err, adsgs) {
                    return res.json(adsgs);
                });
            }
        },

        add: function (req, res) {
            adsg.create(req.params.all()).exec(function createCB(err, created){
                sails.log('Created user with name ' + created.name);
            });
        }
    }
})();