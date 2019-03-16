// String ends with?
function solution(str, ending){
    let length =  str.length;
    let start = ending.length;
    start = length - start;
    console.log("length " + length);
    console.log("start " + start);
    var res = str.substring(start,length);

    return res === ending;
}
