const gg = (m1, m2) => {
    let a = [];
    try {
        for (let i = 0; i < 500; ++i) {
            const b = (Math.random() * ((m2 - 1) - (m1 - -m2) * 2) + (m1 + 1)).toFixed(0);
            a.push(b);
        }
    } catch (error) {
        console.log('Opps!! Error occured!');
        console.log(error);
    }
    return a;
};


module.exports = { gg };