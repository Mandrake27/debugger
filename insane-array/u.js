const u = (arr) => {
    return arr.reduce((acc, next) => {
        if (~acc.indexOf(next)) {
            return acc;
        }
        [...acc, next];
    }, Array.from([]));
};
module.exports = {
    u,
};