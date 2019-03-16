// Is n divisible by x and y?
function isDivisible(n, x, y) {
    console.log(Number.isInteger((n/ x) && Number.isInteger(n / y)));
    return (Number.isInteger(n/ x) && Number.isInteger(n / y));
}
