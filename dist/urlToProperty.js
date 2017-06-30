"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by rachitabansal on 6/5/17.
 */
/**
 * @param {string} queryString the url string.
 * @return {object} returns a properties object.
 * */
// ?a=x,y,z&b=z {a: [x,y], b:[z]}
var urlToProperty = exports.urlToProperty = function urlToProperty(queryString) {
    var result = {};
    if (queryString.length > 0) {
        var queryArray = queryString.substring(1).split("&");
        for (var i in queryArray) {
            var query = queryArray[i].split("=");
            var _key = query[0];
            result[_key] = query[1].split(",") || [];
        }

        for (var _i = 0; _i < result[key].length; _i++) {
            if (result[key][_i].includes(encodeURIComponent("&"))) {
                result[key][_i] = result[key][_i].replace(encodeURIComponent("&"), decodeURIComponent(encodeURIComponent("&")));
            }
        }
    }
    return result;
};