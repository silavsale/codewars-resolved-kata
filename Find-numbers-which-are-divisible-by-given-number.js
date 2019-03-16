// Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){

    let divisible =[];
    console.log("divisor = " + divisor);
    console.log(divisible);
    for (let i = 0; i < numbers.length; i++){

        if( numbers[i] % divisor == 0 ){
            let result = numbers[i];
            divisible.push(result);

        }
        console.log(divisible);
    }

    console.log(divisible);
    return divisible;
}
