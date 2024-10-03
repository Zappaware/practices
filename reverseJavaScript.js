let message = "Hello, World!";
let reversedMessage = message.split("").reverse().join("");

console.log(reversedMessage); // Output: !dlroW ,olleH

let newMessage = "Hello, Madafaka";
let newArrayMessage = newMessage.split("");
let translated = [];

for (let i = newArrayMessage.length - 1; i >= 0; i--) {
    translated.push(newArrayMessage[i]);
}

console.log(translated.join("")); // Output: akafaM ,olleH