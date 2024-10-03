let originalMessage: string = 'Hello World';
let messageArray: string[] = originalMessage.split('');
let originalTranslated: string[] = [];

for (let i = messageArray.length - 1; i >= 0; i--) {
  originalTranslated.push(messageArray[i]);
}

console.log(originalTranslated.join('')); // dlroW olleH