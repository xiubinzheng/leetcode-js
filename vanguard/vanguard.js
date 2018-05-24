console.log('hello world');



/*
0 - 12
0 0
1  1
2  2
3  6
4  24
5  120
*/


function timetable() {
    for (let i = 0; i <= 12; i++) {
        console.log(i, '', i * i);
    }
}

timetable();


/*
0 * 1 *2 * 3 *4 *5 .....n

0 * 0 = 0
0 * 1 = 1
0 *
*/

function timetable2() {
    for (let i = 0; i <= 12; i++) {
        for (let j = 0; j <= 12; j++) {
            console.log(i + '*' + j + ': ' + i * j);
        }
    }
}

timetable2();


/*
You have been hired by a company making electric garage doors to write a safer version of their controller software.
We always start with a closed door. The remote control has exactly one button, with the following behavior.
 If the door is closed, a push starts opening the door, and vice-versa
 It takes 5 seconds for the door to open or close completely
 While the door is moving, one push pauses movement, another push resumes movement in the same direction

The door also has resistance-based obstacle detection. When the door detects an obstacle, 
it must immediately reverse the direction of movement.

To test your software provide an input string where each character represents one second, with the following possible values.

 '.' No event
 'P' Button has been pressed
 'O' Obstacle has been detected (supersedes P)

As an example, '..P....' means that nothing happens for two seconds, then the button is pressed, then no further events.

Output a string where each character represents one second and indicates the position of the door 
(0 if fully closed and 5 fully open). 
The door starts moving immediately, hence its position changes at the same second as the event.

Full up and down example "P......P......" as input should yield "12345554321000" as output

Pause example "P.P.." as input should yield "12222" as output
Resume example "P.P.P...." as input should yield "122234555" as output
Obstacle example "..P...O....." as input should yield "001234321000" as output

Obstacle and pause example "P..OP..P.." as input should yield "1232222100" as output



 we always start with a closed door.

 1.If the door is closed, a push starts opening the door, and vice-versa 
 (antoher push will close the door if and only if the door is completely open)
 2.It takes 5 seconds for the door to open or close completely
 3. While the door is moving, one push pauses movement, another push resumes movement in the same direction


 4. The door also has resistance-based obstacle detection. When the door detects an obstacle, 
it must immediately reverse the direction of movement.

input string - > P.P..
door closed        1 only print after the event
p door now opening  1 
. nothing           2
p -> pause the door movement  2
. nothing                     2
. nothing                     2

output string - > 12222

if 'o' position --
maybe use a boolean to check the direct 

'.' No event
 'P' Button has been pressed
 'O' Obstacle has been detected (supersedes P)

  
don't count, 
if button press, update event p

"P......P......"
*/

function garageDoor(str) {
    let count = 0;
    let res = '';
    let doorOpening = false;

    let state = 0; // 0 inactive, 1 opening, 2 closing

    for (let i = 0; i < str.length; i++) {
        if (doorOpening === true) count++;
        else
        if (count === 5) {
            doorOpening = false;
        }

        if (doorOpening === false && str.charAt(i) === 'p') {
            doorOpening = true;
        }
        res += count;
    }
    return res;
}

function garageDoor2(str) {
    let count = 0;
    let res = '';
    let state = 0; // 0 inactive, 1 opening, 2 closing, 

    for (let i = 0; i < str.length; i++) {

        if (state === 0 && str.charAt(i) === 'P') {
            state = 1;
        } else
        if (state === 1 && str.charAt(i) === 'P') {
            state = 0;
        } else if (state === 1 && str.charAt(i) === 'O') {
            state = 2;
        } else if (state === 2 && str.charAt(i) === 'O') {
            state = 1;
        }

        if (count === 5)
            state = 0;

        if (state === 1 && count < 5) {
            count++;
        } else if (state === 2 && count > 0) {
            /*
            Full up and down example "P......P......" as input should yield "12345554321000" as output
            */
            count--;
        }
        res += count;
    }
    return res;
}


function garageDoor3(str) {
    let count = 0;
    let res = '';
    let state = 0; // 0 inactive, 1 opening, 2 closing, 

    for (let i = 0; i < str.length; i++) {
        if (state === 0 && str.charAt(i) === 'P') {
            state = 1;
        } else
        if (state === 1 && str.charAt(i) === 'P') {
            state = 0;
        } else if (state === 1 && str.charAt(i) === 'O') {
            state = 2;
        } else if (state === 2 && str.charAt(i) === 'O') {
            state = 1;
        }

        if (count === 5)
            state = 0;

        if (state === 1 && count < 5) {
            count++;
        } else if (state === 2 && count > 0) {
            /*
            Full up and down example "P......P......" as input should yield "12345554321000" as output
            */
            count--;
        }
        res += count;
    }
    return res;
}


console.log('-------------------');
console.log(garageDoor2('P.P..'));
console.log(garageDoor2('P.P.P....'));
console.log(garageDoor2('..P...O.....'));
console.log(garageDoor2('P......P......'));
console.log(garageDoor2('P..OP..P..'));


/*
Pause example "P.P.." as input should yield "12222" as output
Resume example "P.P.P...." as input should yield "122234555" as output
Obstacle example "..P...O....." as input should yield "001234321000" as output
Full up and down example "P......P......" as input should yield "12345554321000" as output
Obstacle and pause example "P..OP..P.." as input should yield "1232222100" as output
*/

function garageDoor3(str) {
    let state = 0; // 0 inactive, 1 opening, 2 closing
    let res = '';
    let doorPosition = 0;

    for (let i = 0; i < str.length; i++) {
        if (state === 1 && doorPosition < 5) {
            doorPosition++;
        } else
        if (state === 2 && doorPosition > 0) {
            doorPosition--;
        }

        if (str.charAt(i) === 'P') {

            if (doorPosition === 0 && state === 0) {
                state = 1;
            } else if (doorPosition >= 5 && state === 0) {
                state = 2;
            } else if (state !== 0) {
                state = 0;
            }
        }
        res += doorPosition;
    }
    return res;

}


/*
Full up and down example "P......P......" as input should yield "12345554321000" as output
Pause example "P.P.." as input should yield "12222" as output
Resume example "P.P.P...." as input should yield "122234555" as output
Obstacle example "..P...O....." as input should yield "001234321000" as output
Obstacle and pause example "P..OP..P.." as input should yield "1232222100" as output
*/

function door(events) {
    var pos = 0,
        str = '',
        moving = false,
        up = true
    for (let i = 0; i < events.length; i++) {
        let ev = events[i]
        if (ev === 'O') {
            up = !up
            pos = up ? pos + 1 : pos - 1
        } else {
            moving = (ev === 'P') ? !moving : moving
            if (moving) {
                if (up) {
                    pos = pos === 5 ? 5 : pos + 1
                } else {
                    pos = pos === 0 ? 0 : pos - 1
                }
                [moving, up] = pos
                    ===
                    5 ? [false, false] :
                    pos === 0 ? [false, true] : [moving, up]
            }
        }
        str += pos
    }
    return str;
}


console.log('-------------------');
console.log('P.P.. ', ' expected: 12222', ' actual: ', door('P.P..'));
console.log('P.P.P.... ', ' expected: 122234555', ' actual: ', door('P.P.P....'));
console.log('..P...O..... ', ' expected: 001234321000', ' actual: ', door('..P...O.....'));
console.log('P......P...... ', ' expected: 12345554321000', ' actual: ', door('P......P......'));
console.log('P..OP..P.. ', ' expected: 1232222100', ' actual: ', door('P..OP..P..'));