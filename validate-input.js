'use strict';
var _ = require('underscore');

module.exports = validateinput

function validateinput (payload, fields) {
    var payloadProps = _.keys(payload);
    var exist = true;
    _.each(fields, function(field) {
        if (!_.contains(payloadProps, field)) {
        	exist = false;
        }
    })

    return exist;
}
