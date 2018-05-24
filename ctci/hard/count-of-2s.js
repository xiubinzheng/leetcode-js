function countwos(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        let val = String(i);
        for (let j = 0; j < val.length; j++) {
            if (val.charAt(j) === '2') {
                count++;
            }
        }
    }
    return count;
}

function counttwosinrange(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        count += counttwoinval(i);
    }
    return count;
}

function counttwoinval(val) {
    let count = 0;
    while (val > 0) {
        if (val % 10 == 2) {
            count++;
        }
        val = Math.floor(val / 10);
    }
    return count;
}


console.time('countwos');
console.log(countwos(25));
console.timeEnd('countwos');


console.time('counttwosinrange');
console.log(counttwosinrange(25));
console.timeEnd('counttwosinrange');