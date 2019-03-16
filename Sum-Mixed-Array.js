function sumMix(x){
    let sum = 0;
    let total =0;

    for(let i = 0; i < x.length; i++){
        sum = x[i];
        total += Number(sum);
    }
    return total;
}
