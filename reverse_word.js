const readline = require('readline');

function reverse_word() {
    let letter = [];  
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please enter a word: ", (word) => {
        let i = word.length - 1;  

        while (i >= 0) {  
            letter.push(word[i]);  
            i = i - 1;  
        }

        console.log("Reversed word:", letter.join(''));  
        rl.close();
    });
}

reverse_word();
