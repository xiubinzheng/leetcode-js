// this is a bottom up approach
// typically start at a defined value
function fibAndy(n) {
    // this is our scope variable
    let fibonaci = [0, 1];


    function searchFib(i, limit) {
        // base case
        if (i > limit) {
            return;
        }

        fibonaci[i] = fibonaci[i - 2] + fibonaci[i - 1];
        ////single recursion
        searchFib(i + 1, limit);
    }


    searchFib(2, n);
    // return result
    return fibonaci[n];
}

function fibMine(n) {
    let arr = [0, 1];
    minehelper(2, n, arr);
    return arr[n];
}

function minehelper(i, limit, fibarray) {
    if (i > limit) {
        return;
    }
    fibarray[i] = fibarray[i - 2] + fibarray[i - 1];
    minehelper(i + 1, limit, fibarray);
}


function fibinochi(n) {
    // base case
    if (n == 0 || n == 1) {
        return n;
    } else
        return fibinochi(n - 1) + fibinochi(n - 2);
}





console.time('fibMine');
console.log(fibMine(40));
console.timeEnd('fibMine');