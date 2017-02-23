/**
 * Created by apple on 17/2/23.
 */


/**
 * 串行执行异步任务
 * @type {*}
 */
const async = require('async');

async.series([
    (cb) => {
        setTimeout(() => {
            console.log('看书');
            cb(null,'看书');
        },3000);
    },
    (cb) => {
        setTimeout(() => {
            console.log('写小说');
            cb(null,'写小说');
        },3000);
    }

], (err, result) => {
    console.log(err);
    console.log(result);
});
