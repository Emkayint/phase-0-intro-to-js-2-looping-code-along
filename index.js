// Code your solutions in this file

function writeCards(arr, msg){
    let cardsMsg = [];
    for(let item in arr){
        cardsMsg.push(`Thank you, ${arr[item]}, for the wonderful ${msg} gift!`);
    }
    return cardsMsg;
}

function countDown(no){
    let x = 0;
    while(x < no + 1){
        console.log(no - x)
        x++
    }
    
}
