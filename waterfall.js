

/**
 * 跟串行很像，但是waterfall每个函数的产生的返回值，
 * 作为参数传递给第二个函数
 * @type {*}
 */
const async = require('async');

async.waterfall([
    (cb) => {
        setTimeout(() => {
            cb(null,'看书');
        },3000);
    },
    (data,cb) => {
        setTimeout(() => {
            cb(null, data + '写小说');
        },3000);
    }

], (err, result) => {
    console.log(err);
    console.log(result);
});
