module.exports = function toReadable(number) {
    let readable = '';
    let x = number % 100;
    let y = number % 10;
    let z;
    let twentyReadable = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
        'nineteen', 'twenty'];
    let digitReadable = digit => twentyReadable[digit];

    //digits = number.toString().split('');
    // if (digits.length === 3) {
    //     readable += `${digitReadable(digits[0])} hundred `;
    //     digits.shift();
    // }
    if (number == 0) { return 'zero' };
    if (number > 99) { readable += `${digitReadable(+number.toString()[0])} hundred `; }

    if (x < 30) {
        if (x > 20) {
            z = digitReadable(+(x - y).toString()[0] + 10);
            readable += 'twenty' + ' ' + digitReadable(y);
        }
        else readable += digitReadable(x);
    }
    else {
        z = digitReadable(+(x - y).toString()[0] + 10);
        readable += z.slice(0, -4) + 'ty' + ' ' + digitReadable(y)
    };
    if (y == 0) { return readable.trim() }


    // digits = number.toString().split('');


    // if (digits.length === 3) {
    //     readable += `${digitReadable(digits[0])} hundred `;
    //     digits.shift();
    // }
    // if (digits.length === 2) {
    //     switch (digits[0]) {
    //         case '0': readable.trim();
    //         case '1': teenFlag = true; break;
    //         case '2': readable += 'twenty '; break;
    //         case '3': readable += 'thirty '; break;
    //         case '4': readable += 'forty '; break;
    //         case '5': readable += 'fifty '; break;
    //         case '8': readable += 'eighty '; break;

    //         case '6':
    //         case '7':
    //         case '9':
    //             readable += `${digitReadable(digits[0])}ty    `; break;
    //     };
    //     digits.shift();
    // }
    // readable += digitReadable(digits[0]);


    return readable;
}
