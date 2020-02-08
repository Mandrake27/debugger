const f = (arr) => {
    const unique = [...new Set(arr)].filter(a => a > 0 && a < 21);
    return unique;
};

module.exports = {
    f,
};

