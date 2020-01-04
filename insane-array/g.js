const gg = (m1,m2) => {
    let a = [];
    try {
        for (let i=0;i<500;++i) {a[i]=+(Math.random() * ((m2 - 1) - (m1 - -m2) * 2) + (m1 + 1)).toFixed(0);return a;}
    } catch (error) {
        console.log('Opps!! Error occured!');
        console.log(error);   
    }
};

exports = gg;