function foo() {
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (a[x + 1][y] !== null) {
                if (a[x + 1][y] === a[x][y]) {
                    a[x][y] = a[x][y] * 2;
                    a[x + 1][y] = null;
                }
            }
        }
    }
}


let a = [
    [2, null, 2, null],
    [2, null, 2, null],
    [null, null, null, null],
    [null, null, null, null]
];

let b = [
    [4, null, 4, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
];

foo(a);

console.log(a);
foo(b);

console.log(b);