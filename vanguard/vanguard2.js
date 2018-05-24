function door(events) {
    let pos = 0,
        res = '',
        moving = false,
        up = true;
    for (let i = 0; i < events.length; i++) {
        let event = events.charAt(i);
        if (event === 'O') {
            up = !up;
            if (up === true) {
                pos++;
            } else {
                pos--;
            }
        } else {
            if (event === 'P') {
                moving = !moving;
            }
            if (moving) {
                if (up === true) {
                    if (pos === 5) {
                        pos = 5;
                    } else {
                        pos++;
                    }
                } else {
                    if (pos === 0) {
                        pos = 0;
                    } else {
                        pos--;
                    }
                }

                if (pos === 5) {
                    moving = false;
                    up = false;
                } else if (pos === 0) {
                    moving = false;
                    up = true;
                } else {
                    moving = moving;
                    up = up;
                }
            }
        }
        res += pos;
    }
    return res;
}

console.log('-------------------');
console.log('P.P.. ', ' expected: 12222', ' actual: ', door('P.P..'));
console.log('P.P.P.... ', ' expected: 122234555', ' actual: ', door('P.P.P....'));
console.log('..P...O..... ', ' expected: 001234321000', ' actual: ', door('..P...O.....'));
console.log('P......P...... ', ' expected: 12345554321000', ' actual: ', door('P......P......'));
console.log('P..OP..P.. ', ' expected: 1232222100', ' actual: ', door('P..OP..P..'));