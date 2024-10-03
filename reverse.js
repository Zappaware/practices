var originalMessage = 'Hello World';
var messageArray = originalMessage.split('');
var originalTranslated = [];
for (var i = messageArray.length - 1; i >= 0; i--) {
    originalTranslated.push(messageArray[i]);
}
console.log(originalTranslated.join('')); // dlroW olleH
