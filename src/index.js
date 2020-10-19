const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const dotsAndDashes = {
    '00': '',
    '01': '',
    '10': '.',
    '11': '-',
};


function decode(expr) {
    let string = '';
    const arr = expr.match(/.{10}/g)
    for (elem of arr) {
        if (elem[0] === '*') {
            string += ' '
        } else {
            let morseCode = ''
            const subArr = elem.match(/.{2}/g)
            for (subElem of subArr) {
                morseCode += dotsAndDashes[subElem]
            }
            string += MORSE_TABLE[morseCode]
        }
    }
    return string
}

module.exports = {
    decode
}
