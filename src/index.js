module.exports = function toReadable (number) {
    let a = ['zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'];
    let b = ['ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen']
    let c = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'];

    number = number.toString();

    if (number < 10) return a[number];
    if (number > 9 && number < 20) return b[number.slice(1)];

    if (number > 19 && number < 100) {

        let x = number.slice(0, 1);
        let y = number.slice(1)
        if (y === `0`) {
            return `${c[x]}`
        } else {
            return `${c[x]} ${a[y]}`
        }
    }

    if (number > 99) {

        let x = number.slice(0, 1);
        let y = number.slice(1, 2);
        let z = number.slice(2, 3);

        if (y === `0` && z === `0`) return `${a[x]} hundred`;
        if (y === `0`) return `${a[x]} hundred ${a[z]}`;
        if (y === `1` && z === `0`) return `${a[x]} hundred ten`;
        if (y === '1') return `${a[x]} hundred ${b[z]}`;
        if (z === `0`) return `${a[x]} hundred ${c[y]}`;

        return `${a[x]} hundred ${c[y]} ${a[z]}`;
    }
    
}
