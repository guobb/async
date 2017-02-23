/**
 * Created by apple on 17/2/23.
 */
const async = require('async');

let arr = [1, 2, 3];

// 如何串行迭代，并在全部迭代完成后执行回调

/*async.eachSeries(arr, (item,cb) => {
    setTimeout(() => {
        console.log(item);
        cb();
    }, 1000);
});*/

// 并行迭代
async.forEach(
    arr, (item,cb) => {
        setTimeout(() => {
            console.log(item);
            cb();
        }, 1000);
    }
);