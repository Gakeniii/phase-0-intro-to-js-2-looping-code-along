//write your code here

const names = ["Ellie", "Jolene", "Merlin"];
const writeCards = function(name,surprise){
    const messages = [];

    for(let i=0; i<names.length; i++){
        const message = `Thank you, ${name[i]}, for the wonderful ${surprise} gift!`;
        messages.push(message);
    }

    return messages;
}
console.log(writeCards(names, "surprise"));

const countDown = function(){
    for(let i = 0; i < 11; i++){
        console.log(i)
    }
}

